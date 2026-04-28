"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { stats, WHATSAPP_URL } from "@/lib/data";

export default function Hero() {
  const { t } = useLang();

  return (
    <>
      {/* ── DESKTOP HERO ── */}
      <section id="home" className="hero-desktop" style={{
        minHeight: "100vh",
        paddingTop: "68px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
      }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mr. Cartongesso",
            description: "Specialisti in controsoffitti in cartongesso con sistemi LED integrati",
            url: "https://www.mrcartongesso.it",
            telephone: "+393889995326",
            address: { "@type": "PostalAddress", addressCountry: "IT" },
            areaServed: "IT",
          }),
        }} />

        {/* Left text */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "5rem 4rem 5rem 3rem", position: "relative", zIndex: 2,
        }}>
          <HeroContent t={t} />
        </div>

        {/* Right image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Controsoffitto LED Mr. Cartongesso"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            sizes="50vw"
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, var(--ivory) 0%, transparent 25%)",
          }} />
        </div>
      </section>

      {/* ── MOBILE HERO ── */}
      <section id="home-mobile" className="hero-mobile" style={{
        position: "relative",
        minHeight: "100svh",
        paddingTop: "68px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* Full bleed image — takes top 55% of screen */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Controsoffitto LED Mr. Cartongesso"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
            sizes="100vw"
          />
          {/* Dark gradient from bottom so text is readable */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(245,239,224,0) 0%, rgba(245,239,224,0) 30%, rgba(245,239,224,0.85) 58%, rgba(245,239,224,1) 72%)",
          }} />
        </div>

        {/* Text content — pushed to bottom */}
        <div style={{
          position: "relative",
          zIndex: 1,
          marginTop: "auto",
          padding: "2rem 1.5rem 3rem",
        }}>
          <HeroContent t={t} />
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-desktop { display: grid !important; }
        .hero-mobile  { display: none !important; }

        @media (max-width: 900px) {
          .hero-desktop { display: none !important; }
          .hero-mobile  { display: flex !important; }
        }
      `}</style>
    </>
  );
}

/* Shared content between desktop and mobile */
function HeroContent({ t }: { t: (it: string, en: string) => string }) {
  return (
    <>
      {/* Eyebrow */}
      <div style={{
        display: "flex", alignItems: "center", gap: "0.7rem",
        fontSize: "0.68rem", fontWeight: 500,
        letterSpacing: "0.22em", textTransform: "uppercase",
        color: "var(--gold)", marginBottom: "1.5rem",
        opacity: 0, animation: "fadeInUp 0.7s ease 0.1s forwards",
      }}>
        <span style={{ display: "block", width: "28px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
        {t("Specialisti in Cartongesso & LED", "Drywall & LED Lighting Specialists")}
      </div>

      {/* H1 */}
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2.4rem, 8vw, 5rem)",
        fontWeight: 300, lineHeight: 1.06,
        letterSpacing: "-0.01em", color: "var(--charcoal)",
        marginBottom: "1.4rem",
        opacity: 0, animation: "fadeInUp 0.7s ease 0.2s forwards",
      }}>
        {t("Trasformiamo i Tuoi", "Transforming Your")}<br />
        {t("Spazi con ", "Spaces with ")}
        <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>
          {t("Precisione", "Artisan")}<br />{t("Artigiana", "Precision")}
        </em>
      </h1>

      {/* Description */}
      <p style={{
        fontSize: "0.92rem", fontWeight: 300, lineHeight: 1.85,
        color: "var(--text-muted)", maxWidth: "460px", marginBottom: "2rem",
        opacity: 0, animation: "fadeInUp 0.7s ease 0.3s forwards",
      }}>
        {t(
          "Progettiamo e installiamo controsoffitti in cartongesso con sistemi LED integrati. Soluzioni su misura per residenze e spazi commerciali.",
          "We design and install drywall ceilings with integrated LED systems. Custom solutions for homes and commercial spaces."
        )}
      </p>

      {/* CTAs */}
      <div style={{
        display: "flex", alignItems: "center", gap: "0.85rem",
        marginBottom: "2.5rem", flexWrap: "wrap",
        opacity: 0, animation: "fadeInUp 0.7s ease 0.4s forwards",
      }}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 500,
            color: "var(--white)", background: "var(--warm-brown)",
            padding: "0.9rem 1.8rem", textDecoration: "none",
            letterSpacing: "0.08em", textTransform: "uppercase",
            transition: "background 0.25s",
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--charcoal)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--warm-brown)")}
        >
          <span>💬</span> {t("Scrivici ora", "Message Us Now")}
        </a>
        <a href="#work"
          style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 400,
            color: "var(--warm-brown)", border: "1px solid var(--border-strong)",
            padding: "0.9rem 1.6rem", textDecoration: "none",
            letterSpacing: "0.08em", textTransform: "uppercase",
            transition: "all 0.25s", whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--warm-brown)";
            (e.currentTarget as HTMLElement).style.color = "var(--white)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--warm-brown)";
          }}
        >
          {t("Vedi i Lavori →", "See Our Work →")}
        </a>
      </div>

      {/* Stats */}
      <div style={{
        display: "flex", gap: "2rem", paddingTop: "1.8rem",
        borderTop: "1px solid var(--border)", flexWrap: "wrap",
        opacity: 0, animation: "fadeInUp 0.7s ease 0.5s forwards",
      }}>
        {[
          { num: "200+", it: "Progetti", en: "Projects" },
          { num: "10+", it: "Anni", en: "Years" },
          { num: "100%", it: "Soddisfazione", en: "Satisfaction" },
        ].map((s) => (
          <div key={s.num}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem", fontWeight: 300,
              color: "var(--warm-brown)", lineHeight: 1, marginBottom: "0.25rem",
            }}>
              {s.num}
            </div>
            <div style={{
              fontSize: "0.62rem", fontWeight: 400,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--text-muted)",
            }}>
              {t(s.it, s.en)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}