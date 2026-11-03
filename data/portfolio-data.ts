export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  category?: string;
  image: string;
  aspectRatio?: "16/10" | "9/16";
  images: { url: string; caption: string; aspectRatio?: "16/10" | "9/16" }[];
  description: string;
  year: string;
  tools: string[];
  client: string;
  link?: string;
  featured: boolean;
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category?: string;
  thumbnail: string;
  aspectRatio?: "16/10" | "9/16";
  overview: string;
  highlights?: ProjectHighlight[];
  objectives: string[];
  challenges: string[];
  solutions: string[];
  role: string;
  period: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  images: { url: string; caption: string; aspectRatio?: "16/10" | "9/16" }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

export interface CertificateLearningModule {
  title: string;
  detail: string;
  duration?: string;
}

export interface CertificateItem {
  id: string;
  slug: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  credentialUrl?: string;
  category:
    | "Sertifikasi Kompetensi"
    | "Studi Independen"
    | "Magang"
    | "Sertifikat Pelatihan"
    | "Teknis";
  year: string;
  image: string;
  aspectRatio?: "16/10" | "9/16";
  images?: { url: string; caption: string; aspectRatio?: "16/10" | "9/16" }[];
  description: string;
  fullDescription: string[];
  learningModules: CertificateLearningModule[];
  evaluation: string;
  totalHours?: string;
  skillsAcquired: string[];
  featured: boolean;
}

export interface OrganizationItem {
  id: string;
  slug: string;
  orgName: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  programs: string[];
  achievements: string[];
  photos: { url: string; caption: string }[];
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const portfolioData = {
  profile: {
    name: "Muhammad Nabil Ramadhani",
    title: "FrontEnd Developer & Machine Learning",
    tagline: {
      part1: "halo, saya",
      part2: "nabil.",
    },
    shortBio:
      "Menguasai software dan hardware, dari pengembangan web dan mobile hingga dasar jaringan, untuk menghadirkan solusi inovatif yang andal, efisien, dan tepat guna.",
    fullBio:
      "Lulusan Informatika dengan IPK 3,79 yang menguasai software dan hardware, mulai dari pengembangan web dan mobile, penerapan deep learning, hingga dasar jaringan, dengan ketelitian, kemampuan analitis, dan pemecahan masalah yang kuat untuk menghadirkan solusi yang andal, efisien, dan tepat guna.",
    location: "Surabaya, Jawa Timur",
    availability: "Terbuka untuk kolaborasi & proyek freelance",
    avatar: "/images/hero-portrait.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/muhammad-nabil-ramadhani",
      instagram: "https://www.instagram.com/mhmdnabillr",
      whatsapp: "https://wa.me/62895410715774",
      email: "mramadhaninabil01@gmail.com",
    },
  },

  skills: [
    {
      title: "Frontend Engineering",
      skills: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "State Management (Zustand)", "HTML5 & Web Accessibility (WCAG 2.2)"],
    },
    {
      title: "UI/UX & Design Systems",
      skills: ["Figma Design System", "Swiss Minimalism", "Wireframing & Prototyping", "Design Tokens", "Usability Testing", "Design QA"],
    },
    {
      title: "Backend & Basis Data",
      skills: ["Node.js", "PostgreSQL", "RESTful APIs", "Next.js Server Actions", "Prisma ORM", "Docker Basics"],
    },
    {
      title: "Metodologi & Alat",
      skills: ["Git & GitHub Workflows", "CI/CD Actions", "Lighthouse & Web Vitals Audit", "Unit Testing (Vitest)", "Agile / Scrum"],
    },
  ] as SkillCategory[],

  gallery: [
    {
      id: "gal-1",
      slug: "kantor-jasa-akuntan-sak",
      title: "Website Kantor Jasa Akuntan (SAK)",
      category: "Company Profile",
      image: "/foto-proyek/Website Kantor Jasa Akuntan (SAK)/preview proyek kja.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/foto-proyek/Website Kantor Jasa Akuntan (SAK)/preview proyek kja.png",
          caption: "Halaman keunggulan dan profil korporat Kantor Jasa Akuntan (SAK) Synergy Akuntan Konsulindo",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Website Kantor Jasa Akuntan (SAK)/preview proyek kja 2.png",
          caption: "Halaman metodologi kerja, alur layanan akuntansi & perpajakan, serta konsultasi klien",
          aspectRatio: "16/10",
        },
      ],
      description: "Company profile korporat untuk Kantor Jasa Akuntan (SAK) yang menyajikan layanan pembukuan, pelaporan keuangan, dan perpajakan secara profesional dan responsif.",
      year: "Desember 2024",
      tools: ["Next.js", "Tailwind CSS", "TypeScript"],
      client: "Kantor Jasa Akuntan (SAK)",
      link: "https://example.com/kja-sak",
      featured: true,
    },
    {
      id: "gal-2",
      slug: "kantor-akuntan-publik-djoko-soerjadi",
      title: "Website Kantor Akuntan Publik Djoko Soerjadi",
      category: "Company Profile",
      image: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 1.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 1.png",
          caption: "Halaman beranda utama Kantor Akuntan Publik Djoko Soerjadi di Surabaya",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 2.png",
          caption: "Halaman rincian layanan Jasa Atestasi (Audit Umum, Audit Khusus, Review) dan Jasa Akuntansi",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 3.png",
          caption: "Halaman pengalaman audit di berbagai sektor industri (Properti, Energi, Perkebunan, BUMD, Yayasan, Koperasi)",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 4.png",
          caption: "Halaman kontak, informasi kantor, integrasi WhatsApp, dan formulir pengiriman pesan konsultasi",
          aspectRatio: "16/10",
        },
      ],
      description: "Website profil korporat resmi untuk Kantor Akuntan Publik (KAP) Djoko Soerjadi guna mempublikasikan layanan audit independen, konsultasi perpajakan, dan profil partner profesional.",
      year: "Februari 2026",
      tools: ["Next.js", "Tailwind CSS", "TypeScript"],
      client: "KAP Djoko Soerjadi",
      link: "https://example.com/kap-djoko-soerjadi",
      featured: true,
    },
    {
      id: "gal-3",
      slug: "capstone-bangkit-deteksi-penyakit-kulit",
      title: "Aplikasi Deteksi Penyakit Kulit — Bangkit Academy",
      category: "Mobile & Machine Learning",
      image: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 1.png",
      aspectRatio: "9/16",
      images: [
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 1.png",
          caption: "Splash screen aplikasi seluler DermaOne untuk deteksi dini penyakit kulit",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 2.png",
          caption: "Halaman autentikasi pengguna dan integrasi masuk dengan akun Google",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 3.png",
          caption: "Dashboard utama DermaOne untuk mengunggah citra kulit yang akan didiagnosis",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 4.png",
          caption: "Pratinjau citra lesi kulit pada dashboard sebelum proses inferensi model AI/ML",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 5.png",
          caption: "Hasil klasifikasi penyakit kulit (Cutaneous Larva Migrans) beserta tingkat akurasi (confidence score)",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 6.png",
          caption: "Menu Information Health berisi kumpulan artikel edukasi berbagai jenis penyakit kulit",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 7.png",
          caption: "Halaman profil pengguna, pengaturan aplikasi, dan pusat bantuan",
          aspectRatio: "9/16",
        },
      ],
      description: "Aplikasi seluler cerdas yang memanfaatkan Machine Learning (TensorFlow) dan Cloud Computing untuk mendeteksi serta mengklasifikasikan jenis penyakit kulit secara akurat melalui citra kamera.",
      year: "Desember 2024",
      tools: ["Flutter", "Kotlin", "TensorFlow", "Python", "Google Cloud Storage", "Postman"],
      client: "Bangkit Academy Capstone Project",
      link: "https://example.com/bangkit-skin-disease",
      featured: true,
    },
    {
      id: "gal-4",
      slug: "proyek-skripsi-klasifikasi-malaria-hybrid-cnn-swin-transformer",
      title: "Proyek Skripsi, Klasifikasi Malaria dengan Hybrid CNN-Swin Transformer",
      category: "Machine Learning",
      image: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 1.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 1.png",
          caption: "Antarmuka Sistem Deteksi Otomatis Klasifikasi Penyakit Malaria menggunakan arsitektur Hybrid CNN–Swin Transformer & Grad-CAM",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 2.png",
          caption: "Hasil Klasifikasi (Infected 99.4%) & Visualisasi Heatmap Grad-CAM (Explainable AI) pada citra mikroskopis sel darah",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 3.png",
          caption: "Perbandingan Kurva Loss & Accuracy Model Optimal: CNN vs Swin Transformer vs Hybrid CNN-Swin",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 4.png",
          caption: "Confusion Matrix Model Hybrid CNN-Swin (Split 80:10:10, Batch Size 16, Learning Rate 5e-05)",
          aspectRatio: "16/10",
        },
      ],
      description: "Penelitian ini bertujuan mendeteksi malaria secara otomatis dari citra mikroskopis sel darah (klasifikasi biner: terinfeksi atau normal) menggunakan model Hybrid CNN-Swin Transformer, dioptimalkan lewat Grid Search, dijelaskan dengan Grad-CAM, dan di-deploy sebagai aplikasi web Flask.",
      year: "Proyek Skripsi",
      tools: ["Python", "Hybrid CNN-Swin Transformer", "Jupyter Notebook", "Google Colab", "Grid Search", "Grad-CAM", "Flask"],
      client: "Proyek Skripsi (Machine Learning)",
      featured: true,
    },
    {
      id: "gal-5",
      slug: "sensor-gas-berbasis-thingspeak-iot",
      title: "Sensor Gas Berbasis ThingSpeak (Proyek Akhir IoT)",
      category: "Internet of Things (IoT)",
      image: "/foto-proyek/Sensor Gas Berbasis ThingSpeak (IoT)/preview iot 1.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/foto-proyek/Sensor Gas Berbasis ThingSpeak (IoT)/preview iot 1.png",
          caption: "Prototype Perangkat IoT — Rangkaian mikrokontroler NodeMCU (ESP8266) terhubung dengan sensor gas MQ-2 pada pin analog A0",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Sensor Gas Berbasis ThingSpeak (IoT)/preview iot 2.png",
          caption: "Log Serial Monitor — Akuisisi data gas A0 (1024) dan pengiriman ke ThingSpeak dengan status HTTP/1.1 200 OK",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Sensor Gas Berbasis ThingSpeak (IoT)/preview iot 3.png",
          caption: "Hasil Pengujian — Visualisasi grafik pemantauan konsentrasi gas secara real-time pada Field 1 Chart ThingSpeak",
          aspectRatio: "16/10",
        },
      ],
      description: "Sistem pemantauan konsentrasi gas berbahaya secara real-time dan low-cost menggunakan sensor gas MQ-2 dan mikrokontroler NodeMCU (ESP8266) yang terintegrasi dengan platform cloud IoT ThingSpeak.",
      year: "Desember 2025",
      tools: ["NodeMCU (ESP8266)", "Sensor Gas MQ-2", "DHT11", "C/C++", "Arduino IDE", "ThingSpeak"],
      client: "Proyek Akhir IoT — UPN \"Veteran\" Jawa Timur",
      featured: true,
    },
  ] as GalleryItem[],

  projects: [
    {
      id: "proj-1",
      slug: "kantor-jasa-akuntan-sak",
      title: "Website Kantor Jasa Akuntan (SAK)",
      subtitle: "Company Profile Korporat untuk Layanan Jasa Akuntansi & Keuangan",
      category: "Company Profile",
      thumbnail: "/foto-proyek/Website Kantor Jasa Akuntan (SAK)/preview proyek kja.png",
      aspectRatio: "16/10",
      overview:
        "Proyek perancangan dan pengembangan website profil perusahaan (company profile) untuk Kantor Jasa Akuntan (SAK). Website ini dibangun untuk menyajikan informasi layanan akuntansi, perpajakan, dan konsultasi manajemen secara terstruktur, responsif, dan elegan, meningkatkan kredibilitas di mata klien korporat maupun UMKM.",
      objectives: [
        "Menghadirkan profil digital perusahaan yang mencerminkan profesionalisme dan integritas layanan akuntan.",
        "Menyediakan navigasi informasi layanan jasa (pembukuan, laporan keuangan, perpajakan) yang mudah dipahami.",
        "Memastikan performa akses website sangat cepat, ringan, dan ramah SEO untuk calon klien.",
      ],
      challenges: [
        "Menyusun struktur informasi jasa keuangan yang padat regulasi menjadi tata letak yang bersih dan tidak membingungkan pengunjung.",
        "Menjamin tampilan responsif optimal di seluruh resolusi layar gawai.",
      ],
      solutions: [
        "Mengimplementasikan Next.js App Router dengan komponen modular berbasis TypeScript untuk keandalan kode.",
        "Penerapan Tailwind CSS dengan sistem desain monokromatis profesional dan tipografi Swiss style yang berorientasi keterbacaan tinggi.",
      ],
      role: "Frontend & Web Developer",
      period: "Desember 2024",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
      metrics: [
        { label: "Waktu Muat (LCP)", value: "< 1.0 detik" },
        { label: "Lighthouse Performance", value: "99 / 100" },
        { label: "Responsivitas Layar", value: "100% Mobile Ready" },
        { label: "SEO Score", value: "Skor 100" },
      ],
      liveUrl: "https://example.com/kja-sak",
      githubUrl: "https://github.com/example/kja-sak-company-profile",
      featured: true,
      images: [
        {
          url: "/foto-proyek/Website Kantor Jasa Akuntan (SAK)/preview proyek kja.png",
          caption: "Halaman keunggulan dan profil korporat Kantor Jasa Akuntan (SAK) Synergy Akuntan Konsulindo",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Website Kantor Jasa Akuntan (SAK)/preview proyek kja 2.png",
          caption: "Halaman metodologi kerja, alur layanan akuntansi & perpajakan, serta konsultasi klien",
          aspectRatio: "16/10",
        },
      ],
    },
    {
      id: "proj-2",
      slug: "kantor-akuntan-publik-djoko-soerjadi",
      title: "Website Kantor Akuntan Publik Djoko Soerjadi",
      subtitle: "Company Profile Resmi untuk Layanan Audit & Atestasi Independen",
      category: "Company Profile",
      thumbnail: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 1.png",
      aspectRatio: "16/10",
      overview:
        "Pengembangan website company profile untuk Kantor Akuntan Publik (KAP) Djoko Soerjadi yang memfokuskan pada kredibilitas, transparansi layanan atestasi dan audit independen, serta kepatuhan standar profesi akuntan publik. Dibangun menggunakan arsitektur web modern dengan performa tinggi.",
      objectives: [
        "Membangun kehadiran digital resmi yang memperkuat reputasi firma audit independen.",
        "Menampilkan profil para partner audit bersertifikasi dan ruang lingkup jasa akuntan publik secara komprehensif.",
        "Menyediakan kanal kontak dan konsultasi langsung yang mudah diakses oleh entitas bisnis.",
      ],
      challenges: [
        "Menyesuaikan etika publikasi kantor akuntan publik dengan tetap mempertahankan estetika desain modern yang informatif.",
      ],
      solutions: [
        "Desain modern bernuansa formal dengan tipografi tegas, dibangun menggunakan TypeScript untuk type safety dan Tailwind CSS untuk konsistensi token desain semantik.",
      ],
      role: "Frontend & Web Developer",
      period: "Februari 2026",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
      metrics: [
        { label: "Lighthouse Score", value: "99 / 100" },
        { label: "Aksesibilitas", value: "100 / 100" },
        { label: "Cross-Device Support", value: "375px - 4K" },
        { label: "Waktu Render", value: "Optimal" },
      ],
      liveUrl: "https://example.com/kap-djoko-soerjadi",
      githubUrl: "https://github.com/example/kap-djoko-soerjadi-profile",
      featured: true,
      images: [
        {
          url: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 1.png",
          caption: "Halaman beranda utama Kantor Akuntan Publik Djoko Soerjadi di Surabaya",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 2.png",
          caption: "Halaman rincian layanan Jasa Atestasi (Audit Umum, Audit Khusus, Review) dan Jasa Akuntansi",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 3.png",
          caption: "Halaman pengalaman audit di berbagai sektor industri (Properti, Energi, Perkebunan, BUMD, Yayasan, Koperasi)",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Website Kantor Akuntan Publik Djoko Soerjadi/preview proyek kap 4.png",
          caption: "Halaman kontak, informasi kantor, integrasi WhatsApp, dan formulir pengiriman pesan konsultasi",
          aspectRatio: "16/10",
        },
      ],
    },
    {
      id: "proj-3",
      slug: "capstone-bangkit-deteksi-penyakit-kulit",
      title: "Aplikasi Deteksi Penyakit Kulit — Bangkit Academy",
      subtitle: "Aplikasi Mobile AI/ML untuk Klasifikasi & Deteksi Dini Penyakit Kulit",
      category: "Mobile & Machine Learning",
      thumbnail: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 1.png",
      aspectRatio: "9/16",
      overview:
        "Proyek Capstone Bangkit Academy yang mengembangkan solusi kesehatan digital terintegrasi: aplikasi seluler berbasis Flutter dan native Kotlin yang terhubung dengan model deep learning TensorFlow (dilatih menggunakan Python) serta penyimpanan dataset di Google Cloud Storage. Membantu pengguna melakukan deteksi dini kondisi kulit secara cepat dan praktis.",
      objectives: [
        "Membangun model machine learning berbasis deep learning untuk klasifikasi citra berbagai penyakit kulit umum.",
        "Mengembangkan antarmuka aplikasi mobile yang intuitif menggunakan Flutter dan integrasi modul native Kotlin.",
        "Menyediakan alur inferensi cloud yang andal dengan penyimpanan Google Cloud Storage dan pengujian endpoint via Postman.",
      ],
      challenges: [
        "Mengoptimasi waktu pemrosesan dan inferensi citra beresolusi tinggi dari smartphone agar deteksi berjalan cepat tanpa membebani kuota pengguna.",
      ],
      solutions: [
        "Penerapan kompresi citra sebelum transmisi, orkestrasi pipeline backend menggunakan Python, serta pengujian ketat setiap endpoint API dengan Postman.",
      ],
      role: "Mobile App Developer & Cloud ML Team Member",
      period: "Desember 2024",
      techStack: ["Flutter", "Kotlin", "TensorFlow", "Python", "Google Cloud Storage", "Postman"],
      metrics: [
        { label: "Akurasi Model ML", value: "90%+" },
        { label: "Waktu Inferensi", value: "< 2 detik" },
        { label: "Platform", value: "Android (Flutter & Kotlin)" },
        { label: "Penyimpanan Dataset", value: "Google Cloud Storage" },
      ],
      liveUrl: "https://example.com/bangkit-skin-disease",
      githubUrl: "https://github.com/example/bangkit-capstone-skin-disease",
      featured: true,
      images: [
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 1.png",
          caption: "Splash screen aplikasi seluler DermaOne untuk deteksi dini penyakit kulit",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 2.png",
          caption: "Halaman autentikasi pengguna dan integrasi masuk dengan akun Google",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 3.png",
          caption: "Dashboard utama DermaOne untuk mengunggah citra kulit yang akan didiagnosis",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 4.png",
          caption: "Pratinjau citra lesi kulit pada dashboard sebelum proses inferensi model AI/ML",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 5.png",
          caption: "Hasil klasifikasi penyakit kulit (Cutaneous Larva Migrans) beserta tingkat akurasi (confidence score)",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 6.png",
          caption: "Menu Information Health berisi kumpulan artikel edukasi berbagai jenis penyakit kulit",
          aspectRatio: "9/16",
        },
        {
          url: "/foto-proyek/Aplikasi Deteksi Penyakit Kulit - Bangkit Academy/preview capstone 7.png",
          caption: "Halaman profil pengguna, pengaturan aplikasi, dan pusat bantuan",
          aspectRatio: "9/16",
        },
      ],
    },
    {
      id: "proj-4",
      slug: "proyek-skripsi-klasifikasi-malaria-hybrid-cnn-swin-transformer",
      title: "Proyek Skripsi, Klasifikasi Malaria dengan Hybrid CNN-Swin Transformer",
      subtitle: "Membangun Model Hybrid CNN-Swin Transformer untuk Deteksi Otomatis Malaria dari Citra Mikroskopis Sel Darah (Machine Learning)",
      category: "Machine Learning",
      thumbnail: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 1.png",
      aspectRatio: "16/10",
      overview:
        "Penelitian ini bertujuan mendeteksi malaria secara otomatis dari citra mikroskopis sel darah (klasifikasi biner: terinfeksi atau normal). Saya membangun model hybrid CNN-Swin Transformer dengan Python di Jupyter Notebook/Google Colab, mengoptimalkannya lewat Grid Search, lalu mengevaluasinya dengan accuracy, precision, recall, F1-score, dan ROC-AUC. Hasilnya dijelaskan dengan Grad-CAM dan di-deploy sebagai aplikasi web Flask.",
      highlights: [
        {
          title: "Membangun model Hybrid CNN-Swin Transformer",
          description:
            "Menggabungkan CNN untuk menangkap fitur lokal dan Swin Transformer untuk konteks global pada citra sel darah.",
        },
        {
          title: "Tuning hyperparameter",
          description:
            "Menguji kombinasi learning rate, batch size, dan weight decay secara sistematis, lalu memilih kombinasi dengan hasil terbaik.",
        },
        {
          title: "Evaluasi performa model",
          description:
            "Menilai kemampuan model membedakan sel terinfeksi dan normal, tidak hanya lewat akurasi tetapi juga recall, precision, dan ROC-AUC.",
        },
        {
          title: "Interpretabilitas dengan Grad-CAM",
          description:
            "Menghasilkan heatmap pada area sel yang menjadi dasar prediksi, untuk memastikan model fokus pada bagian yang relevan.",
        },
      ],
      objectives: [
        "Membangun model Hybrid CNN-Swin Transformer yang menggabungkan CNN untuk menangkap fitur lokal dan Swin Transformer untuk konteks global pada citra sel darah.",
        "Melakukan tuning hyperparameter secara sistematis lewat Grid Search dengan menguji kombinasi learning rate, batch size, dan weight decay untuk memilih kombinasi terbaik.",
        "Mengevaluasi performa model dalam membedakan sel terinfeksi dan normal menggunakan metrik accuracy, precision, recall, F1-score, dan ROC-AUC.",
        "Menerapkan interpretabilitas dengan Grad-CAM untuk menghasilkan heatmap pada area sel yang menjadi dasar prediksi serta men-deploy model sebagai aplikasi web Flask.",
      ],
      challenges: [
        "Menangkap fitur morfologi lokal parasit sekaligus memahami konteks spasial global pada citra mikroskopis sel darah untuk klasifikasi biner (terinfeksi atau normal).",
        "Menentukan kombinasi hyperparameter optimal (learning rate, batch size, weight decay) serta memverifikasi bahwa prediksi model benar-benar fokus pada bagian sel yang relevan.",
      ],
      solutions: [
        "Merancang arsitektur Hybrid CNN-Swin Transformer dengan Python di Jupyter Notebook/Google Colab dan mengoptimalkannya secara sistematis menggunakan Grid Search.",
        "Mengintegrasikan visualisasi heatmap Grad-CAM untuk menjelaskan dasar prediksi model secara transparan dan men-deploy sistem ke dalam aplikasi web berbasis Flask.",
      ],
      role: "Machine Learning Researcher & Developer",
      period: "Proyek Skripsi",
      techStack: [
        "Python",
        "Hybrid CNN-Swin Transformer",
        "Jupyter Notebook",
        "Google Colab",
        "Grid Search",
        "Grad-CAM",
        "Flask",
      ],
      metrics: [
        { label: "Klasifikasi Biner", value: "Terinfeksi / Normal" },
        { label: "Optimasi Parameter", value: "Grid Search" },
        { label: "Evaluasi Performa", value: "Acc, Prec, Rec, F1, AUC" },
        { label: "Interpretabilitas & Web", value: "Grad-CAM & Flask" },
      ],
      featured: true,
      images: [
        {
          url: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 1.png",
          caption: "Antarmuka Sistem Deteksi Otomatis Klasifikasi Penyakit Malaria menggunakan arsitektur Hybrid CNN–Swin Transformer & Grad-CAM",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 2.png",
          caption: "Hasil Klasifikasi (Infected 99.4%) & Visualisasi Heatmap Grad-CAM (Explainable AI) pada citra mikroskopis sel darah",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 3.png",
          caption: "Perbandingan Kurva Loss & Accuracy Model Optimal: CNN vs Swin Transformer vs Hybrid CNN-Swin",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Proyek Skripsi - Klasifikasi Malaria Hybrid CNN-Swin Transformer/preview skripsi 4.png",
          caption: "Confusion Matrix Model Hybrid CNN-Swin (Split 80:10:10, Batch Size 16, Learning Rate 5e-05)",
          aspectRatio: "16/10",
        },
      ],
    },
    {
      id: "proj-5",
      slug: "sensor-gas-berbasis-thingspeak-iot",
      title: "Sensor Gas Berbasis ThingSpeak (Proyek Akhir IoT)",
      subtitle: "Rancang Bangun Prototipe Pemantauan Konsentrasi Gas Real-Time Berbasis NodeMCU ESP8266, Sensor MQ-2 & Cloud ThingSpeak",
      category: "Internet of Things (IoT)",
      thumbnail: "/foto-proyek/Sensor Gas Berbasis ThingSpeak (IoT)/preview iot 1.png",
      aspectRatio: "16/10",
      overview:
        "Penelitian dan pengembangan sistem pemantauan konsentrasi gas berbahaya secara real-time, otomatis, dan low-cost menggunakan sensor gas MQ-2 serta sensor suhu/kelembaban DHT11 yang diintegrasikan dengan mikrokontroler NodeMCU (ESP8266). Sistem mengakuisisi data analog dari pin A0, memvalidasi pembacaan sensor pada firmware C/C++ (Arduino IDE), lalu mengirimkan data melalui jaringan Wi-Fi (Station Mode) ke platform cloud IoT ThingSpeak untuk visualisasi grafik real-time dari jarak jauh.",
      highlights: [
        {
          title: "Desain Arsitektur & Perakitan Perangkat Keras",
          description:
            "Merakit prototipe mikrokontroler NodeMCU (ESP8266) sebagai gateway Wi-Fi dengan sensor gas MQ-2 pada pin analog A0 dan sensor DHT11 pada pin digital D5 (tegangan kerja 3.3V).",
        },
        {
          title: "Pengembangan Firmware C/C++ (Arduino IDE)",
          description:
            "Memprogram pembacaan sensor (analogRead), validasi data untuk mencegah pengiriman nilai tidak valid (NaN), serta mekanisme auto-reconnect Wi-Fi (WIFI_STA).",
        },
        {
          title: "Integrasi API & Konfigurasi Cloud ThingSpeak",
          description:
            "Mengonfigurasi Channel dan Write API Key pada platform ThingSpeak untuk menerima transmisi data berkala (>=15 detik) dengan status respon HTTP/1.1 200 OK.",
        },
        {
          title: "Pengujian Respons Sensor & Visualisasi Real-Time",
          description:
            "Menguji respons sensor terhadap paparan gas (pembacaan data A0: 1024 pada Serial Monitor) serta memvalidasi konsistensi perekaman grafik pada Field 1 Chart ThingSpeak.",
        },
      ],
      objectives: [
        "Mengembangkan prototipe sistem pemantauan konsentrasi gas secara otomatis, real-time, dan low-cost untuk mendukung peringatan dini keamanan lingkungan.",
        "Mengintegrasikan sensor gas MQ-2 (pin analog A0) dan sensor DHT11 (pin digital D5) dengan mikrokontroler NodeMCU (ESP8266) untuk akuisisi data lingkungan yang akurat.",
        "Mentransmisikan data pembacaan sensor secara nirkabel melalui Wi-Fi Station Mode (WIFI_STA) ke server cloud ThingSpeak menggunakan protokol HTTP API.",
        "Menyajikan visualisasi grafik konsentrasi gas secara real-time pada dashboard Field 1 Chart ThingSpeak yang dapat dipantau dari jarak jauh.",
      ],
      challenges: [
        "Sistem pemantauan gas konvensional seringkali mahal, memerlukan intervensi manual, dan menyajikan data yang terlambat untuk pengambilan keputusan real-time.",
        "Menjaga stabilitas koneksi Wi-Fi pada mikrokontroler low-cost serta memastikan pengiriman data mematuhi interval minimal platform ThingSpeak tanpa mengirimkan nilai tidak valid (NaN).",
      ],
      solutions: [
        "Menerapkan mekanisme auto-reconnect Wi-Fi dengan timeout terukur pada firmware NodeMCU (ESP8266) serta validasi data sensor sebelum proses transmisi.",
        "Mengintegrasikan komunikasi HTTP API menggunakan Write API Key ThingSpeak dengan interval pengiriman terkalibrasi (>=15 detik) yang terverifikasi melalui log Serial Monitor (HTTP/1.1 200 OK).",
      ],
      role: "IoT Hardware & Firmware Developer",
      period: "Okt – Des 2025",
      techStack: [
        "NodeMCU (ESP8266)",
        "Sensor Gas MQ-2",
        "Sensor DHT11",
        "C/C++",
        "Arduino IDE",
        "ThingSpeak IoT Cloud",
        "HTTP REST API",
      ],
      metrics: [
        { label: "Mikrokontroler", value: "NodeMCU ESP8266" },
        { label: "Sensor Deteksi", value: "MQ-2 (Analog A0)" },
        { label: "Status Transmisi", value: "HTTP/1.1 200 OK" },
        { label: "Visualisasi Cloud", value: "ThingSpeak Field 1" },
      ],
      featured: true,
      images: [
        {
          url: "/foto-proyek/Sensor Gas Berbasis ThingSpeak (IoT)/preview iot 1.png",
          caption: "Prototype Perangkat IoT — Rangkaian mikrokontroler NodeMCU (ESP8266) terhubung dengan sensor gas MQ-2 pada pin analog A0",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Sensor Gas Berbasis ThingSpeak (IoT)/preview iot 2.png",
          caption: "Log Serial Monitor — Akuisisi data gas A0 (1024) dan pengiriman ke ThingSpeak dengan status HTTP/1.1 200 OK",
          aspectRatio: "16/10",
        },
        {
          url: "/foto-proyek/Sensor Gas Berbasis ThingSpeak (IoT)/preview iot 3.png",
          caption: "Hasil Pengujian — Visualisasi grafik pemantauan konsentrasi gas secara real-time pada Field 1 Chart ThingSpeak",
          aspectRatio: "16/10",
        },
      ],
    },
  ] as ProjectItem[],

  experiences: [
    {
      id: "exp-1",
      company: "Kantor Akuntan Publik Djoko Soerjadi",
      role: "Software Engineer & IT Support",
      period: "Nov 2025 — Sep 2026",
      location: "Surabaya, Jawa Timur",
      type: "Accounting Firm",
      responsibilities: [
        "Mengembangkan dan memelihara website profil perusahaan yang responsif menggunakan Next.js.",
        "Merancang dan membangun antarmuka pengguna (UI) berbasis komponen yang responsif dengan Tailwind CSS serta elemen interaktif.",
        "Mengimplementasikan fondasi SEO mencakup structured data, sitemap, dan PWA manifest.",
        "Melakukan pengujian, debugging, dan optimasi performa untuk penerapan produksi (production deployment).",
        "Mengelola administrasi akun pengguna, hak akses, serta pemecahan masalah dasar jaringan LAN/Wi-Fi.",
        "Menyiapkan dan memelihara komputer kerja (workstation), printer, serta perangkat TI kantor guna memastikan seluruh perangkat tetap berfungsi optimal.",
        "Memberikan dukungan teknis harian kepada staf dengan menangani kendala perangkat keras, perangkat lunak, dan konektivitas agar operasional berjalan lancar.",
      ],
      achievements: [],
      skills: [
        "Next.js",
        "Tailwind CSS",
        "SEO & Structured Data",
        "PWA Manifest",
        "IT Support",
        "LAN/Wi-Fi Troubleshooting",
        "Hardware & Workstation Maintenance",
      ],
    },
    {
      id: "exp-2",
      company: "Kantor Jasa Akuntan (SAK)",
      role: "Software Engineer & IT Support",
      period: "Okt 2024 — Nov 2025",
      location: "Surabaya, Jawa Timur",
      type: "Accounting Firm",
      responsibilities: [
        "Membangun dan memelihara website company profile secara menyeluruh (end-to-end) menggunakan Next.js.",
        "Menyiapkan fondasi on-page SEO (JSON-LD, sitemap, robots, PWA manifest) untuk meningkatkan pengindeksan dan visibilitas di mesin pencari.",
        "Membangun komponen UI yang dapat digunakan kembali (modals, tabs, accordions) menggunakan Tailwind CSS dan Framer Motion.",
        "Memberikan dukungan teknis lini pertama untuk kendala perangkat keras, perangkat lunak, dan jaringan guna meminimalkan waktu henti (downtime) bagi pengguna.",
        "Mengelola akun pengguna, izin akses, serta pemecahan masalah konektivitas jaringan dasar (LAN/Wi-Fi).",
        "Mendiagnosis dan menyelesaikan error sistem, konflik perangkat lunak, serta kendala aplikasi secara tepat waktu.",
        "Menginstal, mengonfigurasi, dan memelihara komputer, printer, serta perangkat periferal kantor di seluruh organisasi.",
      ],
      achievements: [],
      skills: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "On-Page SEO (JSON-LD)",
        "IT Support",
        "LAN/Wi-Fi Troubleshooting",
        "System & Hardware Maintenance",
      ],
    },
  ] as ExperienceItem[],

  certificates: [
    {
      id: "cert-1",
      slug: "sertifikasi-bnsp-junior-programmer",
      title: "Sertifikasi Kompetensi BNSP — Junior Programmer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & LSP UPN \"Veteran\" Jawa Timur",
      issueDate: "13 November 2025",
      expiryDate: "13 November 2028",
      credentialId: "SK/310/UN.63/LSP-UPNVJT/V/2026",
      credentialUrl: "/images/certificates/sertifikat-bnsp-junior-programmer.png",
      category: "Sertifikasi Kompetensi",
      year: "2025",
      image: "/images/certificates/sertifikat-bnsp-junior-programmer.png",
      aspectRatio: "9/16",
      images: [
        {
          url: "/images/certificates/sertifikat-bnsp-junior-programmer.png",
          caption: "Surat Keterangan Hasil Uji Kompetensi Mandiri BNSP — Skema Junior Programmer (KOMPETEN)",
          aspectRatio: "9/16",
        },
      ],
      description:
        "Uji kompetensi nasional di bidang pemrograman (Skema Junior Programmer / Junior Web Programmer) dengan predikat KOMPETEN, mencakup penulisan kode sesuai standar, penggunaan struktur data dan logika pemrograman, serta pengujian dan debugging program.",
      fullDescription: [
        "Sertifikasi Kompetensi Nasional pada skema Junior Programmer / Junior Web Programmer yang diselenggarakan oleh Badan Nasional Sertifikasi Profesi (BNSP) melalui Lembaga Sertifikasi Profesi (LSP) Universitas Pembangunan Nasional \"Veteran\" Jawa Timur pada Uji Kompetensi Mandiri Batch 4 tanggal 13 November 2025 dan dinyatakan lulus dengan predikat KOMPETEN.",
        "Uji kompetensi ini memvalidasi penguasaan standar kerja nasional Indonesia (SKKNI) di bidang pengembangan perangkat lunak, mulai dari kemampuan menerjemahkan spesifikasi kebutuhan menjadi algoritma yang efisien, penerapan struktur data yang tepat, hingga penulisan kode sumber (source code) yang bersih, terdokumentasi, dan mematuhi kaidah coding guidelines industri.",
        "Selain aspek implementasi kode, asesmen mencakup praktik pengujian fungsional program (unit & functional testing), pelacakan kesalahan eksekusi (debugging), serta penyusunan dokumentasi teknis program agar perangkat lunak siap dipelihara di lingkungan produksi.",
      ],
      learningModules: [
        {
          title: "Implementasi User Interface & Penulisan Kode Sesuai Standar",
          detail: "Menulis kode program dengan menerapkan konvensi penamaan (naming convention), modularitas fungsi, dan best practices sesuai pedoman standar pemrograman.",
          duration: "Unit Kompetensi SKKNI",
        },
        {
          title: "Penerapan Struktur Data & Logika Pemrograman Terstruktur",
          detail: "Menggunakan tipe data, array/koleksi, percabangan, perulangan, serta dekomposisi prosedur/fungsi untuk menyelesaikan permasalahan komputasi secara optimal.",
          duration: "Unit Kompetensi SKKNI",
        },
        {
          title: "Pengelolaan Input/Output, File & Integrasi Basis Data",
          detail: "Mengimplementasikan akses data terstruktur, validasi masukan pengguna, serta eksekusi kueri dan manipulasi data pada aplikasi.",
          duration: "Unit Kompetensi SKKNI",
        },
        {
          title: "Pengujian Program (Software Testing) & Debugging",
          detail: "Melakukan skenario uji fungsional, mengidentifikasi akar permasalahan (bug/exception), dan memperbaiki kesalahan logika maupun sintaks program.",
          duration: "Unit Kompetensi SKKNI",
        },
      ],
      evaluation:
        "Asesmen praktik langsung (demonstrasi unjuk kerja pembangunan aplikasi) dan wawancara uji lisan berbasis SKKNI di hadapan asesor resmi LSP UPN \"Veteran\" Jawa Timur dengan hasil akhir: KOMPETEN.",
      totalHours: "Uji Kompetensi Nasional (SKKNI)",
      skillsAcquired: [
        "Penulisan Kode Sesuai Standar (Coding Guidelines)",
        "Struktur Data & Logika Pemrograman",
        "Pemrograman Terstruktur & Modular",
        "Pengujian Program (Software Testing)",
        "Debugging & Penanganan Error",
        "Dokumentasi Teknis Program",
      ],
      featured: true,
    },
    {
      id: "cert-2",
      slug: "magang-pt-jawa-pos-media-televisi-jtv",
      title: "PT Jawa Pos Media Televisi (JTV) — (Magang) FullStack Developer",
      issuer: "PT Jawa Pos Media Televisi (JTV)",
      issueDate: "24 Februari 2025 – 24 Mei 2025",
      expiryDate: "Seumur Hidup",
      credentialId: "007/SKPKL-JTV/VI/25",
      credentialUrl: "/images/certificates/sertifikat-jtv-magang.png",
      category: "Magang",
      year: "2025",
      image: "/images/certificates/sertifikat-jtv-magang.png",
      aspectRatio: "9/16",
      images: [
        {
          url: "/images/certificates/sertifikat-jtv-magang.png",
          caption: "Surat Keterangan Praktek Kerja Lapangan (Magang) di PT. Jawapos Media Televisi (JTV) Divisi IT",
          aspectRatio: "9/16",
        },
      ],
      description:
        "Program Praktek Kerja Lapangan (Magang) pada posisi FullStack Developer (24 Februari 2025 – 24 Mei 2025): pengembangan aplikasi JTV Hub, fitur mini games dan siaran, integrasi API, pengujian dan perbaikan bug, serta pengelolaan database aplikasi.",
      fullDescription: [
        "Program Praktek Kerja Lapangan (PKL / Magang Industri) selama 3 bulan penuh (24 Februari 2025 – 24 Mei 2025) di Divisi IT PT Jawa Pos Media Televisi (JTV), jaringan televisi regional terbesar di Jawa Timur yang berlokasi di Gedung Graha Pena, Surabaya.",
        "Berperan sebagai FullStack Developer dalam pengembangan ekosistem aplikasi digital JTV Hub—platform terpadu yang menghubungkan pemirsa dengan tayangan siaran televisi, konten berita, serta fitur interaktif berbasis web dan mobile.",
        "Bertanggung jawab secara end-to-end mulai dari perancangan dan implementasi fitur interaktif (seperti modul mini games dan integrasi jadwal/streaming siaran), penghubungan antarmuka frontend dengan RESTful API backend, pengelolaan skema dan kueri database aplikasi, hingga siklus pengujian (QA testing) dan perbaikan bug demi menjaga stabilitas layanan di lingkungan produksi.",
      ],
      learningModules: [
        {
          title: "Pengembangan Ekosistem Aplikasi JTV Hub",
          detail: "Merancang dan mengimplementasikan modul antarmuka pengguna yang responsif serta logika bisnis layanan pada platform digital JTV Hub.",
          duration: "Feb – Mei 2025",
        },
        {
          title: "Pengembangan Fitur Mini Games & Modul Siaran",
          detail: "Membangun fitur mini games interaktif untuk meningkatkan engagement pengguna serta modul penayangan informasi dan siaran langsung JTV.",
          duration: "Feb – Mei 2025",
        },
        {
          title: "Integrasi RESTful API & Sinkronisasi Data",
          detail: "Menghubungkan lapisan frontend dan backend melalui endpoint REST API untuk pertukaran data konten, autentikasi pengguna, dan interaksi real-time.",
          duration: "Feb – Mei 2025",
        },
        {
          title: "Pengelolaan Database & Optimasi Kueri",
          detail: "Merancang struktur tabel relasional, mengelola penyimpanan data aplikasi, serta memastikan integritas dan performa akses database.",
          duration: "Feb – Mei 2025",
        },
        {
          title: "Pengujian Aplikasi (Testing) & Perbaikan Bug",
          detail: "Melaksanakan pengujian fungsional lintas perangkat, menelusuri penyebab kendala teknis (debugging), dan menerapkan patch perbaikan secara berkala.",
          duration: "Feb – Mei 2025",
        },
      ],
      evaluation:
        "Evaluasi kinerja langsung oleh Divisi IT & General Affair PT Jawa Pos Media Televisi (JTV) atas penyelesaian fitur aplikasi JTV Hub dan dedikasi kerja selama periode magang 3 bulan.",
      totalHours: "3 Bulan (24 Feb – 24 Mei 2025)",
      skillsAcquired: [
        "Pengembangan Aplikasi JTV Hub (FullStack)",
        "Pengembangan Fitur Mini Games & Siaran",
        "Integrasi RESTful API Frontend & Backend",
        "Pengujian Fungsional & Perbaikan Bug (Debugging)",
        "Perancangan & Pengelolaan Database Aplikasi",
        "Kolaborasi Tim Engineering di Industri Media",
      ],
      featured: true,
    },
    {
      id: "cert-3",
      slug: "bangkit-academy-2024-mobile-developer",
      title: "Bangkit Academy 2024 — Mobile Development",
      issuer: "Bangkit Academy (Google, GoTo, Tokopedia, Traveloka)",
      issueDate: "Sep – Des 2024",
      expiryDate: "Seumur Hidup",
      credentialId: "BA24/GRAD/XXV-01/A296B4KY2952",
      credentialUrl: "/images/certificates/sertifikat-bangkit-1.png",
      category: "Studi Independen",
      year: "2024",
      image: "/images/certificates/sertifikat-bangkit-1.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/images/certificates/sertifikat-bangkit-1.png",
          caption: "Certificate of Completion — Bangkit Academy 2024 Specializing in Mobile Development",
          aspectRatio: "16/10",
        },
        {
          url: "/images/certificates/sertifikat-bangkit-2.png",
          caption: "Student Learning Achievement & Transkrip Kompetensi Bangkit Academy 2024 (Full Graduate)",
          aspectRatio: "16/10",
        },
      ],
      description:
        "Bangkit Academy 2024 (Google, GoTo, Tokopedia, Traveloka), jalur Mobile Developer (Sep – Dec 2024): pengembangan aplikasi Android dengan Kotlin, integrasi model ML, UI lanjutan (animasi, lokalisasi), API, jaringan, dan data persistence.",
      fullDescription: [
        "Program kesiapan karier teknologi intensif (Studi Independen Bersertifikat Kampus Merdeka) yang dipimpin oleh Google bersama GoTo, Tokopedia, dan Traveloka pada alur belajar Mobile Development (Android) periode 6 September 2024 – 31 Desember 2024 dengan status kelulusan penuh (Full Graduate).",
        "Kurikulum mencakup penguasaan menyeluruh pengembangan aplikasi Android modern menggunakan bahasa Kotlin dan Jetpack Compose: mulai dari pemrograman berorientasi objek & fungsional, komunikasi jaringan dengan RESTful Web API, penyimpanan data lokal (Room Database & DataStore), hingga komponen Android tingkat lanjut seperti Custom View, Property Animation, Motion Layout, Localization, Geo Location, dan pengujian otomatis.",
        "Di samping keahlian teknis mobile dan implementasi on-device Machine Learning (TensorFlow Lite & ML Kit), program ini juga membekali kompetensi Product-based Capstone Project lintas disiplin (Mobile Development, Machine Learning, dan Cloud Computing) serta pengembangan soft skills profesional berstandar global.",
      ],
      learningModules: [
        {
          title: "Basic Kotlin & Beginner Android",
          detail: "Memahami konsep dasar pemrograman, functional programming, dan OOP menggunakan Kotlin (Nilai: 83.5), serta membangun aplikasi Android penampil daftar dan detail data (Nilai: 79).",
          duration: "110 Jam",
        },
        {
          title: "Android Fundamental (Web API & Local Data Persistence)",
          detail: "Membangun aplikasi Android dengan arsitektur bersih yang mengambil data dari Web API (Retrofit) dan menyimpannya secara lokal dengan Room/DataStore (Nilai: 77).",
          duration: "140 Jam",
        },
        {
          title: "Intermediate Android (Advanced UI, Animation, Localization & Compose)",
          detail: "Mengimplementasikan komponen Android lanjutan mencakup Custom UI, Animation, Localization, Background Process/Service, Media, Sensor, Location/Maps, Testing, Firebase, dan Jetpack Compose (Nilai: 77).",
          duration: "150 Jam",
        },
        {
          title: "Introduction to AI & Applied Machine Learning for Android",
          detail: "Memahami konsep dasar AI (Nilai: 70.5) dan mengembangkan aplikasi Android yang mengintegrasikan model Machine Learning lokal (on-device) untuk klasifikasi citra kamera secara efisien (Nilai: 79).",
          duration: "70 Jam",
        },
        {
          title: "Capstone / Final Project & Soft Skills Development",
          detail: "Merancang dan mengembangkan aplikasi solusi kesehatan digital deteksi penyakit kulit dalam tim lintas alur (Nilai: 72.3), disertai pelatihan intensif Growth Mindset, Critical Thinking, Project Management, dan Professional Communication (Nilai: 78.8).",
          duration: "442 Jam",
        },
      ],
      evaluation:
        "Lulus penuh (Full Graduate) dengan penyelesaian 8 modul kompetensi teknis & soft skills serta penyelesaian Capstone Project aplikasi mobile terintegrasi AI/ML dan Cloud.",
      totalHours: "912 Jam (6 Sep – 31 Des 2024)",
      skillsAcquired: [
        "Aplikasi Android dengan Kotlin",
        "Integrasi Model Machine Learning (ML)",
        "UI Lanjutan (Animasi & Lokalisasi)",
        "Integrasi REST API & Jaringan (Retrofit)",
        "Data Persistence & Penyimpanan Lokal (Room)",
        "Jetpack Compose & Clean Architecture",
        "Kolaborasi Lintas Disiplin & Manajemen Proyek",
      ],
      featured: true,
    },
    {
      id: "cert-4",
      slug: "dicoding-pengembangan-aplikasi-android-intermediate",
      title: "Belajar Pengembangan Aplikasi Android Intermediate",
      issuer: "Dicoding Indonesia (Google Developers Authorized Training Partner)",
      issueDate: "24 Desember 2024",
      expiryDate: "24 Desember 2027",
      credentialId: "4EXG7MGYGPRL",
      credentialUrl: "https://www.dicoding.com/certificates/4EXG7MGYGPRL",
      category: "Sertifikat Pelatihan",
      year: "2024",
      image: "/images/certificates/sertifikat-dicoding-android-intermediate-1.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/images/certificates/sertifikat-dicoding-android-intermediate-1.png",
          caption: "Sertifikat Kompetensi Kelulusan — Belajar Pengembangan Aplikasi Android Intermediate",
          aspectRatio: "16/10",
        },
        {
          url: "/images/certificates/sertifikat-dicoding-android-intermediate-2.png",
          caption: "Rincian Kurikulum: Advanced UI, Animation, Localization, Service, Media, Geo Location, Testing & Firebase",
          aspectRatio: "16/10",
        },
        {
          url: "/images/certificates/sertifikat-dicoding-android-intermediate-3.png",
          caption: "Evaluasi Proyek Akhir: Aplikasi Android Story App dengan implementasi Paging (150 Jam)",
          aspectRatio: "16/10",
        },
      ],
      description:
        "Sertifikat pelatihan tingkat menengah pengembangan aplikasi Android berstandar Google Developers yang mencakup penerapan Advanced UI (Custom View & Widget), animasi (Motion Layout), lokalisasi multi-bahasa & aksesibilitas, pengelolaan media & background service, integrasi Google Maps & Geofencing, pengujian terotomasi (TDD & UI Testing), hingga integrasi layanan Firebase dan Paging.",
      fullDescription: [
        "Pelatihan intensif tingkat menengah (Intermediate) bagi Android Developer dengan kurikulum resmi Google Developers Authorized Training Partner (total 150 jam pelajaran) yang berfokus pada penguasaan komponen-komponen Advanced Android untuk membangun aplikasi skala produksi.",
        "Dalam kelas ini, peserta mendalami cara meningkatkan kualitas pengalaman pengguna (UX) melalui pembuatan Custom View, App Widget, WebView, animasi interaktif menggunakan Property Animation & Motion Layout, serta dukungan aplikasi inklusif melalui fitur Localization (multi-bahasa) dan Accessibility.",
        "Dari sisi arsitektur dan kapabilitas perangkat, pelatihan mencakup eksekusi tugas latar belakang dengan Service, pengelolaan dan pengunggahan media (audio, video, gambar) via Multipart API, pemetaan spasial menggunakan Google Maps API, Location Service, dan Geofences, penerapan Advanced Database dengan Paging 3, pengujian aplikasi menyeluruh berbasis TDD (Test Double, Idling Resource, MockWebServer), serta integrasi ekosistem Firebase (Authentication, Realtime Database, dan FCM).",
      ],
      learningModules: [
        {
          title: "Advanced UI, Animation, Localization & Accessibility",
          detail: "Meningkatkan pengalaman pengguna dengan Custom View, Widget, dan WebView (11j 50m), membuat animasi dengan Property Animation & Motion Layout (8j 10m), serta menerapkan Localization multi-bahasa dan Accessibility (11j 35m).",
          duration: "31 Jam 35 Menit",
        },
        {
          title: "Background Service & Pengelolaan Media Multipart",
          detail: "Memahami siklus kerja Service di Background Thread (5j 20m) serta mengelola media audio, video, dan gambar beserta pengunggahannya ke server menggunakan Multipart (13j 10m).",
          duration: "18 Jam 30 Menit",
        },
        {
          title: "Geo Location, Google Maps API & Geofencing",
          detail: "Menampilkan peta interaktif dengan Google Maps API, melacak koordinat pengguna (latitude & longitude) melalui Location Service, serta memantau area radius tertentu dengan Geofences.",
          duration: "7 Jam 20 Menit",
        },
        {
          title: "Advanced Testing, Advanced Database (Paging) & Firebase",
          detail: "Menguji aplikasi secara unit testing dan UI testing dengan TDD, Test Double, Idling Resource & MockWebServer (7j 30m), pengujian Architecture Component & Paging (9j 50m), serta integrasi Firebase Auth, Realtime Database & FCM (3j).",
          duration: "20 Jam 20 Menit",
        },
      ],
      evaluation:
        "Submission (proyek akhir) berupa pembuatan aplikasi Android bertema Story App (berbagi cerita, foto kamera/galeri, dan lokasi peta) yang mengimplementasikan autentikasi, animasi transisi, Google Maps, pengujian unit, serta Paging 3.",
      totalHours: "150 Jam Pelatihan",
      skillsAcquired: [
        "Advanced UI (Custom View, Widget, WebView)",
        "Property Animation & Motion Layout",
        "Localization & Accessibility",
        "Google Maps API, Location Service & Geofencing",
        "Unit Testing & UI Testing (TDD, MockWebServer)",
        "Advanced Database (Paging 3) & Firebase",
      ],
      featured: true,
    },
    {
      id: "cert-5",
      slug: "dicoding-penerapan-machine-learning-untuk-android",
      title: "Belajar Penerapan Machine Learning untuk Android",
      issuer: "Dicoding Indonesia (Google Developers Authorized Training Partner)",
      issueDate: "08 November 2024",
      expiryDate: "08 November 2027",
      credentialId: "KEXLYQ1LYZG2",
      credentialUrl: "https://www.dicoding.com/certificates/KEXLYQ1LYZG2",
      category: "Sertifikat Pelatihan",
      year: "2024",
      image: "/images/certificates/sertifikat-dicoding-ml-android-1.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/images/certificates/sertifikat-dicoding-ml-android-1.png",
          caption: "Sertifikat Kompetensi Kelulusan — Belajar Penerapan Machine Learning untuk Android",
          aspectRatio: "16/10",
        },
        {
          url: "/images/certificates/sertifikat-dicoding-ml-android-2.png",
          caption: "Rincian Kurikulum: On-Device ML, ML Kit, TensorFlow Lite, MediaPipe, Firebase ML, dan Generative AI",
          aspectRatio: "16/10",
        },
        {
          url: "/images/certificates/sertifikat-dicoding-ml-android-3.png",
          caption: "Evaluasi Proyek Akhir: Aplikasi Android klasifikasi citra on-device dengan Machine Learning (60 Jam)",
          aspectRatio: "16/10",
        },
      ],
      description:
        "Sertifikat pelatihan integrasi Machine Learning pada perangkat Android (on-device maupun cloud) yang mencakup pemanfaatan ML Kit, implementasi custom model TensorFlow Lite (Image Classification, Object Detection, Prediction), pemrosesan media real-time dengan MediaPipe, pembaruan model dinamis via Firebase ML, serta penerapan Generative AI.",
      fullDescription: [
        "Program pelatihan khusus Android Developer berstandar Google Developers Authorized Training Partner (total 60 jam pelajaran) untuk merancang dan mengimplementasikan kemampuan kecerdasan buatan (Machine Learning) langsung di dalam perangkat seluler (on-device inference) maupun terhubung dengan layanan cloud.",
        "Peserta mempelajari arsitektur pemrosesan citra dari kamera dan galeri Android, penggunaan pustaka siap pakai Google ML Kit (untuk pengenalan teks, penerjemahan bahasa, dan pemindaian barcode), serta cara menanamkan custom model menggunakan TensorFlow Lite untuk kasus Image Classification, Object Detection, dan Time-Series/Tabular Prediction.",
        "Kurikulum juga mencakup penggunaan MediaPipe dan MediaPipe Studio untuk pemrosesan media real-time yang kompleks, manajemen distribusi model secara over-the-air (OTA) menggunakan Firebase ML, hingga implementasi fitur Generative AI pada Android seperti Smart Reply dan Question & Answer berbasis model BERT.",
      ],
      learningModules: [
        {
          title: "Fondasi Machine Learning & Komponen Dasar Android untuk ML",
          detail: "Memahami keunggulan on-device ML dan pemilihan framework (4 jam), serta penguasaan komponen Android pendukung ML seperti custom view, akses kamera/galeri, dan integrasi ML berbasis cloud via Web API & Retrofit (6 jam).",
          duration: "10 Jam",
        },
        {
          title: "Implementasi Google ML Kit",
          detail: "Menerapkan solusi machine learning siap pakai dari Google ML Kit secara langsung di aplikasi Android, mencakup Text Recognition, Translation, dan Barcode Scanning.",
          duration: "7 Jam",
        },
        {
          title: "Custom Model dengan TensorFlow Lite & MediaPipe",
          detail: "Mengintegrasikan custom model TensorFlow Lite untuk studi kasus Image Classification, Object Detection, dan Prediction (9 jam), serta mendalami MediaPipe & MediaPipe Studio untuk kasus media real-time (6 jam).",
          duration: "15 Jam",
        },
        {
          title: "Firebase ML (OTA Model Deployment) & Generative AI",
          detail: "Mengelola pembaruan model dinamis secara over-the-air (OTA) menggunakan Firebase ML (4 jam) dan membangun fitur cerdas berbasis Generative AI menggunakan ML Kit & TensorFlow Lite seperti Smart Reply dan BERT Question & Answer (6 jam).",
          duration: "10 Jam",
        },
      ],
      evaluation:
        "Submission (proyek akhir) berupa pembangunan aplikasi Android yang mengimplementasikan model Machine Learning secara on-device untuk mengklasifikasikan citra dari galeri secara akurat dan efisien.",
      totalHours: "60 Jam Pelatihan",
      skillsAcquired: [
        "On-Device Machine Learning (TensorFlow Lite)",
        "Google ML Kit (Text Recognition, Translation, Barcode)",
        "Image Classification & Object Detection",
        "MediaPipe Real-Time Media Processing",
        "Firebase ML Over-The-Air (OTA) Model",
        "Generative AI di Android (Smart Reply & BERT QA)",
      ],
      featured: false,
    },
    {
      id: "cert-6",
      slug: "dicoding-belajar-dasar-ai",
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia (Google Cloud Partner)",
      issueDate: "27 Oktober 2024",
      expiryDate: "27 Oktober 2027",
      credentialId: "0LZ044253P65",
      credentialUrl: "https://www.dicoding.com/certificates/0LZ044253P65",
      category: "Sertifikat Pelatihan",
      year: "2024",
      image: "/images/certificates/sertifikat-dicoding-dasar-ai-1.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/images/certificates/sertifikat-dicoding-dasar-ai-1.png",
          caption: "Sertifikat Kompetensi Kelulusan — Belajar Dasar AI",
          aspectRatio: "16/10",
        },
        {
          url: "/images/certificates/sertifikat-dicoding-dasar-ai-2.png",
          caption: "Rincian Materi: Konsep Artificial Intelligence, Pemanfaatan Data untuk AI, Machine Learning, dan Deep Learning",
          aspectRatio: "16/10",
        },
      ],
      description:
        "Sertifikat pelatihan fondasi kecerdasan buatan (Artificial Intelligence) yang mempelajari konsep inti AI, peran dan pengelolaan data dalam sistem cerdas, prinsip dasar Machine Learning, serta arsitektur dan implementasi praktis Deep Learning.",
      fullDescription: [
        "Pelatihan pengantar komprehensif di bidang kecerdasan buatan (Artificial Intelligence) yang disusun bersama Google Cloud Partner untuk membangun landasan konseptual dan analitis sebelum mengembangkan solusi berbasis AI dan Machine Learning.",
        "Membahas taksonomi Artificial Intelligence, bagaimana data dikumpulkan, dipersiapkan, dan dimanfaatkan sebagai bahan bakar utama pengembangan model cerdas, serta perbedaan antara pendekatan pemrograman tradisional dengan pendekatan berbasis pembelajaran mesin (Machine Learning).",
        "Pada bagian akhir, peserta mempelajari konsep jaringan saraf tiruan dalam Deep Learning beserta studi kasus dan implementasi penerapannya di berbagai sektor industri modern.",
      ],
      learningModules: [
        {
          title: "Berkenalan dengan Artificial Intelligence (AI)",
          detail: "Mengidentifikasi definisi, sejarah perkembangan, taksonomi, serta konsep-konsep dasar tentang Artificial Intelligence.",
          duration: "1 Jam 30 Menit",
        },
        {
          title: "Data untuk AI",
          detail: "Memaparkan konsep dasar tentang jenis data, kualitas data, siklus persiapan data, serta pemanfaatannya dalam pengembangan sistem AI.",
          duration: "1 Jam 25 Menit",
        },
        {
          title: "Pengantar Machine Learning",
          detail: "Menjelaskan konsep dasar Machine Learning (Supervised, Unsupervised, dan Reinforcement Learning) sebagai bagian dari AI beserta contoh penerapannya.",
          duration: "2 Jam 30 Menit",
        },
        {
          title: "Deep Learning Untuk Semua Orang",
          detail: "Mengidentifikasi konsep penting dalam jaringan saraf tiruan (Artificial Neural Networks) dan Deep Learning beserta implementasi contoh penerapannya.",
          duration: "2 Jam 25 Menit",
        },
      ],
      evaluation:
        "Evaluasi kelulusan melalui ujian akhir komprehensif yang menguji pemahaman konsep Artificial Intelligence, pengelolaan data, Machine Learning, dan Deep Learning.",
      totalHours: "10 Jam Pelatihan",
      skillsAcquired: [
        "Konsep Dasar Artificial Intelligence (AI)",
        "Manajemen & Pemanfaatan Data untuk AI",
        "Prinsip Supervised & Unsupervised Machine Learning",
        "Konsep Jaringan Saraf Tiruan & Deep Learning",
      ],
      featured: false,
    },
    {
      id: "cert-7",
      slug: "dicoding-memulai-pemrograman-dengan-kotlin",
      title: "Memulai Pemrograman dengan Kotlin",
      issuer: "Dicoding Indonesia (Google Developers Authorized Training Partner)",
      issueDate: "25 September 2024",
      expiryDate: "25 September 2027",
      credentialId: "1OP84D3R8ZQK",
      credentialUrl: "https://www.dicoding.com/certificates/1OP84D3R8ZQK",
      category: "Sertifikat Pelatihan",
      year: "2024",
      image: "/images/certificates/sertifikat-dicoding-kotlin-1.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/images/certificates/sertifikat-dicoding-kotlin-1.png",
          caption: "Sertifikat Kompetensi Kelulusan — Memulai Pemrograman dengan Kotlin",
          aspectRatio: "16/10",
        },
        {
          url: "/images/certificates/sertifikat-dicoding-kotlin-2.png",
          caption: "Rincian Materi: Gradle Kotlin DSL, Kotlin Fundamental, Control Flow, dan Object-Oriented Programming",
          aspectRatio: "16/10",
        },
        {
          url: "/images/certificates/sertifikat-dicoding-kotlin-3.png",
          caption: "Rincian Materi Lanjutan: Special Classes, Collections, Functional Programming, Generics, dan Coroutines (50 Jam)",
          aspectRatio: "16/10",
        },
      ],
      description:
        "Sertifikat pelatihan bahasa pemrograman Kotlin berstandar internasional Google Developers yang membahas sintaks fundamental, paradigma Object-Oriented Programming (OOP) dan Functional Programming, pengelolaan koleksi data, Kotlin Generics, hingga pemrograman asinkron dan konkurensi menggunakan Kotlin Coroutines.",
      fullDescription: [
        "Pelatihan penguasaan bahasa pemrograman Kotlin berstandar kompetensi internasional Google Developers Authorized Training Partner (total 50 jam pelajaran) yang dirancang sebagai fondasi utama pengembangan aplikasi Android modern dan sistem backend.",
        "Kurikulum mencakup konfigurasi proyek menggunakan Gradle dan Kotlin DSL, penguasaan Kotlin Fundamental (tipe data, null safety, string template), pengendalian alur program (Control Flow), serta pemodelan sistem dunia nyata menggunakan paradigma Object-Oriented Programming (class, property, inheritance, abstract class, interface, visibility modifier, dan overloading).",
        "Selain OOP, peserta mendalami fitur-fitur ekspresif Kotlin seperti Special Classes (Data Class, Sealed Class, Enum), manipulasi struktur data Collections, paradigma Kotlin Functional Programming (extension function, lambda, higher-order function, scope function), pembuatan tipe fleksibel dengan Kotlin Generics & Variance, hingga penanganan proses konkuren dan asynchronous menggunakan Kotlin Coroutines.",
      ],
      learningModules: [
        {
          title: "Ekosistem Kotlin, Gradle Kotlin DSL & Kotlin Fundamental",
          detail: "Pengenalan karakteristik ekosistem Kotlin (3j 30m), konfigurasi build tools menggunakan Gradle & Kotlin DSL (5j), serta konsep dasar Kotlin meliputi tipe data, null-safety, dan String Template (6j).",
          duration: "14 Jam 30 Menit",
        },
        {
          title: "Control Flow & Kotlin Object-Oriented Programming (OOP)",
          detail: "Mengontrol aliran program dengan expression, statement, enumeration, when, dan perulangan (3j 30m), serta menerapkan konsep OOP meliputi class, inheritance, abstract class, interface, visibility modifier, dan overloading (8j).",
          duration: "11 Jam 30 Menit",
        },
        {
          title: "Special Classes, Collections & Functional Programming",
          detail: "Mengelola data dengan special class dan collection beserta operatornya (7j), serta menerapkan functional programming dengan extension, lambda, higher-order function, recursion, dan scope function (4j 30m).",
          duration: "11 Jam 30 Menit",
        },
        {
          title: "Kotlin Generics & Concurrency dengan Coroutines",
          detail: "Membuat kelas bertipe fleksibel menggunakan generic dan variance (2j 30m), serta memahami konsep concurrency (process, thread, menghindari deadlock/race condition) menggunakan Kotlin Coroutines (5j 30m).",
          duration: "8 Jam",
        },
      ],
      evaluation:
        "Ujian akhir kelas dan submission proyek akhir berupa latihan pemrograman komprehensif yang menguji implementasi konsep dasar Kotlin, OOP, Functional Programming, hingga Concurrency dengan Coroutines.",
      totalHours: "50 Jam Pelatihan",
      skillsAcquired: [
        "Kotlin Fundamental & Null Safety",
        "Object-Oriented Programming (OOP) di Kotlin",
        "Kotlin Functional Programming (Lambda & Scope Function)",
        "Special Classes, Collections & Kotlin Generics",
        "Concurrency & Asynchronous dengan Kotlin Coroutines",
        "Manajemen Proyek dengan Gradle Kotlin DSL",
      ],
      featured: false,
    },
    {
      id: "cert-8",
      slug: "dicoding-pengenalan-ke-logika-pemrograman",
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Dicoding Indonesia",
      issueDate: "16 September 2024",
      expiryDate: "16 September 2027",
      credentialId: "0LZ040J1KP65",
      credentialUrl: "https://www.dicoding.com/certificates/0LZ040J1KP65",
      category: "Sertifikat Pelatihan",
      year: "2024",
      image: "/images/certificates/sertifikat-dicoding-logika-pemrograman-1.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/images/certificates/sertifikat-dicoding-logika-pemrograman-1.png",
          caption: "Sertifikat Kompetensi Kelulusan — Pengenalan ke Logika Pemrograman (Programming Logic 101)",
          aspectRatio: "16/10",
        },
        {
          url: "/images/certificates/sertifikat-dicoding-logika-pemrograman-2.png",
          caption: "Rincian Materi: Logika & Algoritma Dasar, Gerbang Logika, dan Computational Thinking",
          aspectRatio: "16/10",
        },
      ],
      description:
        "Sertifikat pelatihan dasar logika pemrograman berstandar industri yang mencakup penyusunan algoritma, operasi gerbang logika (AND, OR, NOT, NAND, NOR, XOR, XNOR), serta pemecahan masalah sistematis menggunakan metode Computational Thinking (dekomposisi, pengenalan pola, abstraksi, dan evaluasi).",
      fullDescription: [
        "Pelatihan fondasi penalaran logis dan algoritmik berstandar industri bagi Software Developer untuk membangun kerangka berpikir yang terstruktur sebelum merancang arsitektur kode yang kompleks.",
        "Membahas secara mendalam prinsip logika proposisional dan operasional gerbang logika digital (AND, OR, NOT, NAND, NOR, XOR, dan XNOR) yang menjadi dasar pengambilan keputusan dan percabangan kondisi di dalam setiap bahasa pemrograman.",
        "Peserta juga dilatih memecahkan studi kasus dunia nyata menggunakan metodologi Computational Thinking—meliputi dekomposisi masalah besar menjadi sub-masalah kecil, pengenalan pola (pattern recognition), abstraksi informasi relevan, perancangan langkah algoritma yang presisi, serta evaluasi efisiensi solusi.",
      ],
      learningModules: [
        {
          title: "Pendahuluan Logika & Algoritma Dasar",
          detail: "Memahami definisi serta hubungan antara logika dan algoritma, serta mengidentifikasi berbagai jenis logika pemrograman dasar.",
          duration: "1 Jam 9 Menit",
        },
        {
          title: "Gerbang Logika (Logic Gates)",
          detail: "Menguasai cara kerja tabel kebenaran dan kombinasi gerbang logika meliputi AND, OR, NOT, NAND, NOR, XOR, dan XNOR.",
          duration: "1 Jam 49 Menit",
        },
        {
          title: "Pengenalan Dasar Computational Thinking",
          detail: "Menyelesaikan masalah secara sistematis menggunakan empat pilar computational thinking: dekomposisi, pengenalan pola, abstraksi, penulisan algoritma, dan evaluasi.",
          duration: "1 Jam 24 Menit",
        },
        {
          title: "Studi Kasus Penerapan Logika Pemrograman",
          detail: "Menerapkan ilmu logika pemrograman dan computational thinking yang telah dipelajari ke dalam pemecahan studi kasus rekayasa perangkat lunak nyata.",
          duration: "1 Jam 7 Menit",
        },
      ],
      evaluation:
        "Ujian akhir kelas yang menguji ketepatan analisis gerbang logika, penyusunan alur algoritma, serta penerapan metode Computational Thinking pada studi kasus pemrograman.",
      totalHours: "6 Jam Pelatihan",
      skillsAcquired: [
        "Logika Dasar & Penyusunan Algoritma",
        "Operasi Gerbang Logika (AND, OR, NOT, NAND, NOR, XOR, XNOR)",
        "Computational Thinking (Dekomposisi & Abstraksi)",
        "Pengenalan Pola & Evaluasi Solusi Pemrograman",
      ],
      featured: false,
    },
    {
      id: "cert-9",
      slug: "upnvjt-workshop-library-class-fakultas-hukum",
      title: "Workshop Library Class Fakultas Hukum",
      issuer: "UPA Perpustakaan UPN \"Veteran\" Jawa Timur",
      issueDate: "5 Februari 2026 (TTE: 23 Februari 2026)",
      expiryDate: "Seumur Hidup",
      credentialId: "IVO-UPNVJT-20260205",
      credentialUrl: "https://ivo.upnjatim.ac.id",
      category: "Sertifikat Pelatihan",
      year: "2026",
      image: "/images/certificates/sertifikat-workshop-library-class-upn.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/images/certificates/sertifikat-workshop-library-class-upn.png",
          caption: "Sertifikat Peserta Workshop Library Class Fakultas Hukum — UPA Perpustakaan UPN \"Veteran\" Jawa Timur (5 Februari 2026)",
          aspectRatio: "16/10",
        },
      ],
      description:
        "Sertifikat partisipasi sebagai peserta dalam kegiatan Workshop Library Class Fakultas Hukum yang diselenggarakan oleh UPA Perpustakaan UPN \"Veteran\" Jawa Timur pada tanggal 5 Februari 2026 untuk peningkatan literasi informasi ilmiah dan pemanfaatan koleksi digital perpustakaan.",
      fullDescription: [
        "Sertifikat resmi yang diberikan kepada Muhammad Nabil Ramadhani atas partisipasinya sebagai Peserta dalam kegiatan Workshop Library Class Fakultas Hukum yang diselenggarakan oleh UPA Perpustakaan UPN \"Veteran\" Jawa Timur pada tanggal 5 Februari 2026.",
        "Program Workshop Library Class ini bertujuan membekali peserta dengan kemampuan literasi informasi akademik, strategi penelusuran referensi ilmiah dan jurnal terindeks, pemanfaatan repositori institusi serta pangkalan data digital perpustakaan, hingga pengelolaan sitasi untuk penulisan karya tulis ilmiah.",
        "Sertifikat ini ditandatangani secara elektronik (TTE) oleh Kepala UPA Perpustakaan UPN \"Veteran\" Jawa Timur, Dr. Dewi Khrisna Sawitri, S.S., S.Psi., M.Si., CHRM (NIPPPK. 198006122025212038) pada 23 Februari 2026 dan dapat diverifikasi melalui sistem IVO UPN \"Veteran\" Jawa Timur.",
      ],
      learningModules: [
        {
          title: "Literasi Informasi & Layanan Perpustakaan Digital",
          detail: "Pengenalan ekosistem layanan UPA Perpustakaan UPN \"Veteran\" Jawa Timur, pemanfaatan katalog daring (OPAC), serta akses koleksi dan repositori digital.",
        },
        {
          title: "Strategi Penelusuran Sumber Referensi Ilmiah",
          detail: "Teknik pencarian literatur akademik, e-journal, dan e-book secara efektif dan kredibel untuk menunjang riset serta penyusunan karya tulis ilmiah.",
        },
        {
          title: "Etika Akademik & Pemanfaatan Koleksi Ilmiah",
          detail: "Pemahaman etika penulisan ilmiah, pencegahan plagiarisme, dan pemanfaatan sumber rujukan terverifikasi di lingkungan perguruan tinggi.",
        },
      ],
      evaluation:
        "Partisipasi aktif dan penyelesaian rangkaian kegiatan Workshop Library Class yang diselenggarakan oleh UPA Perpustakaan UPN \"Veteran\" Jawa Timur.",
      totalHours: "5 Februari 2026",
      skillsAcquired: [
        "Literasi Informasi Akademik",
        "Penelusuran Referensi & Jurnal Ilmiah",
        "Pemanfaatan Perpustakaan Digital & Repositori",
        "Penulisan & Riset Ilmiah",
      ],
      featured: false,
    },
    {
      id: "cert-10",
      slug: "upnvjt-english-proficiency-test-ept",
      title: "English Proficiency Test (EPT) — Score: 473",
      issuer: "UPA Bahasa UPN \"Veteran\" Jawa Timur (Language Center)",
      issueDate: "12 Maret 2026",
      expiryDate: "12 Maret 2028",
      credentialId: "131245 / S8558859825",
      credentialUrl: "/images/certificates/sertifikat-ept-upnvjt.png",
      category: "Sertifikasi Kompetensi",
      year: "2026",
      image: "/images/certificates/sertifikat-ept-upnvjt.png",
      aspectRatio: "16/10",
      images: [
        {
          url: "/images/certificates/sertifikat-ept-upnvjt.png",
          caption: "Sertifikat English Proficiency Test (EPT) Score 473 — UPA Bahasa UPN \"Veteran\" Jawa Timur (No. Seri: 131245)",
          aspectRatio: "16/10",
        },
      ],
      description:
        "Sertifikat kompetensi kemahiran bahasa Inggris (English Proficiency Test / EPT) yang diterbitkan oleh UPA Bahasa Universitas Pembangunan Nasional \"Veteran\" Jawa Timur dengan perolehan skor total 473 (Listening Comprehension: 46, Structure and Written Expression: 48, Reading Comprehension and Vocabulary: 48).",
      fullDescription: [
        "Sertifikat resmi English Proficiency Test (EPT) dengan Nomor Seri 131245 (Kode Verifikasi QR: S8558859825) yang diterbitkan oleh UPA Bahasa (Language Center), Universitas Pembangunan Nasional \"Veteran\" Jawa Timur di bawah Kementerian Pendidikan Tinggi, Sains dan Teknologi pada tanggal 12 Maret 2026.",
        "Pengujian kemahiran bahasa Inggris akademik ini mengukur tiga aspek kompetensi utama pada rentang Score Benchmark 310 – 677: Listening Comprehension (Skor: 46), Structure and Written Expression (Skor: 48), serta Reading Comprehension and Vocabulary (Skor: 48), dengan capaian skor akhir 473.",
        "Sertifikat ini disahkan di Surabaya pada 12 Maret 2026 oleh Kepala UPA Bahasa UPN \"Veteran\" Jawa Timur, Syifa Syarifah Alamiyah, S.Sos., M.Comm (NIP. 198403242024212021).",
      ],
      learningModules: [
        {
          title: "Section 1: Listening Comprehension",
          detail: "Evaluasi pemahaman menyimak percakapan pendek, percakapan panjang, serta pemaparan akademik dalam bahasa Inggris.",
          duration: "Skor: 46",
        },
        {
          title: "Section 2: Structure and Written Expression",
          detail: "Evaluasi penguasaan tata bahasa (grammar), struktur kalimat formal, serta ketepatan ekspresi tertulis standar akademik bahasa Inggris.",
          duration: "Skor: 48",
        },
        {
          title: "Section 3: Reading Comprehension and Vocabulary",
          detail: "Evaluasi kemampuan analisis teks bacaan ilmiah/akademik, penarikan kesimpulan, serta penguasaan kosakata bahasa Inggris.",
          duration: "Skor: 48",
        },
      ],
      evaluation:
        "Meraih skor total English Proficiency Test (EPT) sebesar 473 pada rentang nilai Benchmark 310 – 677 di Language Center UPN \"Veteran\" Jawa Timur.",
      totalHours: "Score: 473 (Benchmark 310–677)",
      skillsAcquired: [
        "English Listening Comprehension (Score: 46)",
        "Structure & Written Expression (Score: 48)",
        "Reading Comprehension & Vocabulary (Score: 48)",
        "Komunikasi & Literasi Bahasa Inggris Akademik",
      ],
      featured: true,
    },
  ] as CertificateItem[],

  organizations: [
    {
      id: "org-1",
      slug: "panitia-kaderisasi-divisi-pioneer",
      orgName: "Panitia Kaderisasi (Divisi Pioneer)",
      role: "Divisi Pioneer",
      period: "23 Nov 2023",
      location: "Kepanitiaan Kaderisasi",
      summary:
        "Memetakan lokasi tenda beserta listrik, penerangan, dan sumber air, serta menjaga keselamatan peserta dari bahaya alam.",
      responsibilities: [
        "Memetakan lokasi tenda beserta listrik, penerangan, dan sumber air di area kegiatan.",
        "Menjaga keselamatan peserta dari bahaya alam selama kegiatan berlangsung.",
      ],
      programs: [
        "Pemetaan Lokasi Tenda, Listrik, Penerangan, dan Sumber Air",
        "Penjagaan Keselamatan Peserta dari Bahaya Alam",
      ],
      achievements: [],
      photos: [],
      featured: true,
    },
    {
      id: "org-2",
      slug: "panitia-seminar-karya-tulis-ilmiah-divisi-perlengkapan",
      orgName: "Panitia Seminar Karya Tulis Ilmiah (Divisi Perlengkapan)",
      role: "Divisi Perlengkapan",
      period: "14 Okt 2023",
      location: "Kepanitiaan Seminar",
      summary:
        "Menyusun kebutuhan alat tiap kegiatan dan mengelola pengadaan sesuai anggaran.",
      responsibilities: [
        "Menyusun kebutuhan alat tiap kegiatan secara terperinci.",
        "Mengelola pengadaan perlengkapan dan peralatan sesuai anggaran.",
      ],
      programs: [
        "Penyusunan Kebutuhan Alat Tiap Kegiatan",
        "Pengelolaan Pengadaan Perlengkapan Sesuai Anggaran",
      ],
      achievements: [],
      photos: [],
      featured: true,
    },
    {
      id: "org-3",
      slug: "panitia-kaderisasi-divisi-keamanan",
      orgName: "Panitia Kaderisasi (Divisi Keamanan)",
      role: "Divisi Keamanan",
      period: "27 Okt 2022",
      location: "Kepanitiaan Kaderisasi",
      summary:
        "Menjaga keamanan dan ketertiban acara, mengawasi area kegiatan, serta berkoordinasi dengan panitia saat terjadi insiden.",
      responsibilities: [
        "Menjaga keamanan dan ketertiban acara selama kegiatan berlangsung.",
        "Mengawasi area kegiatan secara menyeluruh.",
        "Berkoordinasi dengan panitia saat terjadi insiden di lapangan.",
      ],
      programs: [
        "Penjagaan Keamanan & Ketertiban Acara",
        "Pengawasan Area Kegiatan & Koordinasi Insiden",
      ],
      achievements: [],
      photos: [],
      featured: true,
    },
    {
      id: "org-4",
      slug: "product-based-capstone-project-team",
      orgName: "Product Based Capstone Project Team",
      role: "Mobile Development (Android / Kotlin)",
      period: "Okt 2024 – Des 2024",
      location: "Capstone Project Team",
      summary:
        "Membangun aplikasi seluler untuk deteksi penyakit kulit. Mengintegrasikan API ke dalam aplikasi Android menggunakan Kotlin untuk memungkinkan komunikasi yang lancar antara aplikasi dan layanan cloud.",
      responsibilities: [
        "Membangun aplikasi seluler untuk deteksi penyakit kulit.",
        "Mengintegrasikan API ke dalam aplikasi Android menggunakan Kotlin untuk memungkinkan komunikasi yang lancar antara aplikasi dan layanan cloud.",
      ],
      programs: [
        "Pembangunan Aplikasi Seluler untuk Deteksi Penyakit Kulit",
        "Integrasi API ke dalam Aplikasi Android Menggunakan Kotlin & Layanan Cloud",
      ],
      achievements: [],
      photos: [],
      featured: true,
    },
  ] as OrganizationItem[],

  contact: {
    email: "mramadhaninabil01@gmail.com",
    phone: "0895410715774",
    whatsappUrl: "https://wa.me/62895410715774",
    location: "Surabaya, Jawa Timur",
    responseTime: "Biasanya membalas dalam kurun waktu 1x24 jam kerja",
    statusNote: "Tersedia untuk proyek kontrak, freelance terpilih, dan diskusi arsitektur perangkat lunak.",
  },
};
