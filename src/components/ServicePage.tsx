"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { WHATSAPP_URL } from "@/lib/data";
import { useLang } from "@/lib/LangContext";

export interface ServicePageProps {
  badge: string;
  badgeEN?: string;
  titleIT: string;
  titleEN?: string;
  titleLine2IT: string;
  titleLine2EN?: string;
  subtitleIT: string;
  subtitleEN?: string;
  descriptionIT: string;
  descriptionEN?: string;
  benefitsIT: string[];
  benefitsEN?: string[];
  heroImage: string;
  heroImageAlt: string;
  galleryImages: { src: string; alt: string }[];
  serviceName: string;
  serviceDescription: string;
  relatedServices: { href: string; labelIT: string; labelEN?: string; icon: string }[];
}

export default function ServicePage({
  badge, badgeEN,
  titleIT, titleEN,
  titleLine2IT, titleLine2EN,
  subtitleIT, subtitleEN,
  descriptionIT, descriptionEN,
  benefitsIT, benefitsEN,
  heroImage, heroImageAlt,
  galleryImages,
  relatedServices,
}: ServicePageProps) {
  const { t } = useLang();

  const benefits = benefitsEN
    ? benefitsIT.map((b, i) => t(b, benefitsEN[i] ?? b))
    : benefitsIT;

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden", background: "var(--charcoal)" }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image src={heroImage} alt={heroImageAlt} fill style={{ objectFit: "cover", objectPosition: "center", opacity: 0.35 }} priority sizes="100vw" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(20,14,8,0.85) 0%, rgba(20,14,8,0.4) 100%)" }} />
          </div>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "10rem 3rem 6rem", width: "100%" }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "1.8rem" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</Link>
              <span>›</span>
              <Link href="/#services" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{t("Servizi", "Services")}</Link>
              <span>›</span>
              <span style={{ color: "var(--gold)" }}>{badgeEN ? t(badge, badgeEN) : badge}</span>
            </div>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.4rem" }}>
              <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold)" }} />
              {badgeEN ? t(badge, badgeEN) : badge}
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 5vw, 5rem)", fontWeight: 300, lineHeight: 1.05, color: "#fff", marginBottom: "1.6rem" }}>
              {titleEN ? t(titleIT, titleEN) : titleIT}<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
                {titleLine2EN ? t(titleLine2IT, titleLine2EN) : titleLine2IT}
              </em>
            </h1>

            <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", maxWidth: "560px", marginBottom: "2.5rem" }}>
              {subtitleEN ? t(subtitleIT, subtitleEN) : subtitleIT}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "var(--warm-brown)", color: "#fff", padding: "0.9rem 2rem", textDecoration: "none", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", transition: "background 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--charcoal)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--warm-brown)"}>
                💬 {t("Preventivo Gratuito", "Free Quote")}
              </a>
              <a href="#gallery" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", border: "1px solid rgba(200,165,88,0.4)", color: "rgba(255,255,255,0.8)", padding: "0.9rem 2rem", textDecoration: "none", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {t("Vedi Progetti", "View Projects")} →
              </a>
            </div>
          </div>
        </section>

        {/* ── DESCRIPTION + BENEFITS ── */}
        <section style={{ background: "var(--ivory)", padding: "6rem 3rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="service-content-grid">
            {/* Left */}
            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--warm-brown)", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ display: "block", width: "20px", height: "1px", background: "var(--warm-brown)" }} />
                {t("Il Servizio", "The Service")}
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.15, color: "var(--charcoal)", marginBottom: "1.5rem" }}>
                {t("Realizzato con", "Crafted with")} <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>{t("precisione", "precision")}</em>
              </h2>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9, color: "var(--text-muted)" }}>
                {descriptionEN ? t(descriptionIT, descriptionEN) : descriptionIT}
              </p>
              <div style={{ marginTop: "2.5rem" }}>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-brown)", textDecoration: "none", borderBottom: "1px solid var(--warm-brown)", paddingBottom: "0.2rem" }}>
                  {t("Parla con noi del tuo progetto", "Talk to us about your project")} →
                </a>
              </div>
            </div>

            {/* Right — benefits */}
            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--warm-brown)", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ display: "block", width: "20px", height: "1px", background: "var(--warm-brown)" }} />
                {t("Cosa Include", "What's Included")}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {benefits.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.2rem 1.4rem", background: "rgba(107,76,42,0.04)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)" }}>
                    <span style={{ color: "var(--gold)", minWidth: "24px", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.6 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        {galleryImages.length > 0 && (
          <section id="gallery" style={{ background: "var(--ivory-dark)", padding: "6rem 3rem" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--warm-brown)", marginBottom: "1rem" }}>
                <span style={{ display: "block", width: "20px", height: "1px", background: "var(--warm-brown)" }} />
                {t("Progetti Realizzati", "Completed Projects")}
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 300, color: "var(--charcoal)", marginBottom: "3rem" }}>
                {t("I nostri", "Our")} <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>{t("lavori", "work")}</em>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
                {galleryImages.map((img, i) => (
                  <div key={i} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--charcoal)" }}>
                    <Image src={img.src} alt={img.alt} fill
                      style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                      sizes="(max-width: 768px) 100vw, 400px"
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = "scale(1)"} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── RELATED SERVICES ── */}
        <section style={{ background: "var(--ivory)", padding: "5rem 3rem", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--warm-brown)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ display: "block", width: "20px", height: "1px", background: "var(--warm-brown)" }} />
              {t("Altri Servizi", "Other Services")}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {relatedServices.map((s, i) => (
                <Link key={i} href={s.href}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", padding: "0.9rem 1.6rem", border: "1px solid var(--border)", background: "transparent", textDecoration: "none", fontSize: "0.82rem", fontWeight: 400, color: "var(--charcoal)", transition: "border-color 0.2s, background 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--warm-brown)"; (e.currentTarget as HTMLElement).style.background = "rgba(107,76,42,0.04)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                  <span>{s.icon}</span>
                  {s.labelEN ? t(s.labelIT, s.labelEN) : s.labelIT}
                  <span style={{ color: "var(--text-light)", marginLeft: "0.2rem" }}>→</span>
                </Link>
              ))}
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", padding: "0.9rem 1.6rem", border: "1px solid var(--border)", background: "transparent", textDecoration: "none", fontSize: "0.82rem", fontWeight: 400, color: "var(--text-muted)" }}>
                ← {t("Torna alla Home", "Back to Home")}
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .service-content-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
