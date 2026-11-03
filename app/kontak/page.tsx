"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { LinkedinIcon, InstagramIcon, WhatsappIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/data/portfolio-data";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Anti-spam trap
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function KontakPage() {
  const { profile, contact } = portfolioData;

  const [formData, setFormData] = React.useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const validate = React.useCallback(
    (field?: keyof FormState): FormErrors => {
      const newErrors: FormErrors = {};

      if (!field || field === "name") {
        if (!formData.name.trim()) {
          newErrors.name = "Nama lengkap wajib diisi.";
        } else if (formData.name.trim().length < 2) {
          newErrors.name = "Nama minimal terdiri dari 2 karakter.";
        }
      }

      if (!field || field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
          newErrors.email = "Alamat email wajib diisi.";
        } else if (!emailRegex.test(formData.email.trim())) {
          newErrors.email = "Format alamat email tidak valid (contoh: nama@domain.com).";
        }
      }

      if (!field || field === "subject") {
        if (!formData.subject.trim()) {
          newErrors.subject = "Subjek pesan wajib diisi.";
        } else if (formData.subject.trim().length < 3) {
          newErrors.subject = "Subjek pesan minimal 3 karakter.";
        }
      }

      if (!field || field === "message") {
        if (!formData.message.trim()) {
          newErrors.message = "Pesan wajib diisi.";
        } else if (formData.message.trim().length < 10) {
          newErrors.message = "Pesan terlalu pendek, mohon jelaskan kebutuhan Anda (min. 10 karakter).";
        }
      }

      return newErrors;
    },
    [formData]
  );

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(field);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field as keyof FormErrors] }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const fieldErrors = validate(name as keyof FormState);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Check honeypot (bots often fill hidden inputs)
    if (formData.honeypot) {
      // Fake delay and silent ignore
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
      }, 800);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate network submission delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
      setTouched({});
      setErrors({});
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-12">
        {/* Header Section */}
        <section className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            Hubungi Saya
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Punya ide produk yang ingin direalisasikan, membutuhkan bantuan arsitektur frontend, atau ingin mendiskusikan peluang kerja sama? Kirimkan pesan melalui formulir di bawah ini.
          </p>
        </section>

        {/* Two-Column Grid: Form Left, Direct Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Kirim Pesan Langsung
              </h2>
              <p className="text-sm text-muted-foreground">
                Isi formulir ini dan pesan Anda akan diteruskan langsung ke kotak masuk saya.
              </p>
            </div>

            {/* Success / Error Feedback Alert */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  role="status"
                  aria-live="polite"
                  className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1 text-sm">
                    <p className="font-bold">Pesan Anda berhasil dikirim!</p>
                    <p className="text-xs text-muted-foreground">
                      Terima kasih telah menghubungi. Saya akan membalas pesan Anda dalam 1x24 jam kerja.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  role="alert"
                  className="p-4 rounded-xl border border-destructive/30 bg-destructive/10 text-destructive flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1 text-sm">
                    <p className="font-bold">Terjadi kendala saat mengirim pesan.</p>
                    <p className="text-xs">
                      Silakan coba lagi atau kirimkan email langsung ke {contact.email}.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Anti-spam honeypot (hidden from human users) */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="form-honeypot">Jangan isi kolom ini jika Anda manusia</label>
                <input
                  id="form-honeypot"
                  name="honeypot"
                  type="text"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {/* Name field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-name"
                  className="block text-sm font-semibold text-foreground"
                >
                  Nama Lengkap <span className="text-destructive">*</span>
                </label>
                <input
                  id="form-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Misalnya: Budi Santoso"
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-destructive focus:ring-destructive"
                      : "border-border focus:ring-ring"
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-destructive font-medium mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-email"
                  className="block text-sm font-semibold text-foreground"
                >
                  Alamat Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="nama@perusahaan.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-destructive focus:ring-destructive"
                      : "border-border focus:ring-ring"
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-destructive font-medium mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-subject"
                  className="block text-sm font-semibold text-foreground"
                >
                  Subjek Pembahasan <span className="text-destructive">*</span>
                </label>
                <input
                  id="form-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={() => handleBlur("subject")}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  placeholder="Contoh: Tawaran Proyek Web App FinTech"
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 ${
                    errors.subject
                      ? "border-destructive focus:ring-destructive"
                      : "border-border focus:ring-ring"
                  }`}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs text-destructive font-medium mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="form-message"
                  className="block text-sm font-semibold text-foreground"
                >
                  Isi Pesan <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Ceritakan gambaran proyek, target waktu, atau kebutuhan yang ingin Anda diskusikan..."
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 resize-y ${
                    errors.message
                      ? "border-destructive focus:ring-destructive"
                      : "border-border focus:ring-ring"
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-destructive font-medium mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-foreground text-background shadow-lg shadow-orange-500/10 font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      <span>Mengirimkan Pesan...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Direct Contact Information (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status card */}
            <div className="p-6 rounded-2xl border border-accent/40 bg-accent/10 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                Status Ketersediaan
              </div>
              <p className="text-base font-bold text-foreground">
                {profile.availability}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {contact.statusNote}
              </p>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-2xl border border-border bg-card space-y-5">
              <h3 className="text-lg font-bold text-foreground pb-2 border-b border-border">
                Informasi Kontak Langsung
              </h3>

              <div className="space-y-4">
                <div className="space-y-0.5">
                  <span className="text-xs text-muted-foreground font-medium">Alamat Email</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="block text-sm font-bold text-foreground hover:text-accent underline transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>

                <div className="space-y-0.5">
                  <span className="text-xs text-muted-foreground font-medium">Lokasi Kerja</span>
                  <span className="block text-sm font-bold text-foreground">
                    {contact.location}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-xs text-muted-foreground font-medium">Waktu Respon</span>
                  <span className="block text-sm font-bold text-foreground">
                    {contact.responseTime}
                  </span>
                </div>
              </div>

              {/* Social Channels List with >= 44x44px Touch Target */}
              <div className="pt-4 border-t border-border space-y-3">
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Profil Jejaring Profesional
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Muhammad Nabil"
                    title="LinkedIn"
                    className="min-w-[44px] min-h-[44px] p-3 rounded-xl border border-border bg-background hover:bg-muted hover:border-accent/50 text-foreground hover:text-accent transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <LinkedinIcon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                  </a>

                  <a
                    href={profile.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Muhammad Nabil"
                    title="Instagram"
                    className="min-w-[44px] min-h-[44px] p-3 rounded-xl border border-border bg-background hover:bg-muted hover:border-accent/50 text-foreground hover:text-accent transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <InstagramIcon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                  </a>

                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Muhammad Nabil"
                    title="WhatsApp"
                    className="min-w-[44px] min-h-[44px] p-3 rounded-xl border border-border bg-background hover:bg-muted hover:border-accent/50 text-foreground hover:text-accent transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <WhatsappIcon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
