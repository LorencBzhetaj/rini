"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Magnet from "./Magnet";
import { useLang } from "@/lib/LangContext";
import { WHATSAPP_URL } from "@/lib/data";

const fade = (delay: number, y = 24) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function Hero() {
  const { t } = useLang();

  return (
    <>
      {/* ── DESKTOP ── */}
      <section
        className="hero-desktop"
        style={{
          minHeight: "100vh",
          paddingTop: "68px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Full bleed background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Controsoffitto LED Mr. Cartongesso"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
            sizes="100vw"
          />
          {/* Dark overlay on right, light on left for text readability */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(245,239,224,0.97) 0%, rgba(245,239,224,0.92) 38%, rgba(245,239,224,0.4) 60%, rgba(245,239,224,0.0) 100%)",
          }} />
          {/* Subtle bottom fade */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(245,239,224,0.6) 100%)",
          }} />
        </div>

        {/* Text content — left aligned */}
        <div style={{
          position: "relative", zIndex: 1,
          padding: "0 3rem",
          maxWidth: "620px",
          width: "100%",
        }}>
          {/* Eyebrow */}
          <motion.div {...fade(0.1)} style={{
            display: "flex", alignItems: "center", gap: "0.7rem",
            fontSize: "0.68rem", fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--gold)", marginBottom: "1.8rem",
          }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            {t("Specialisti in Cartongesso & LED", "Drywall & LED Lighting Specialists")}
          </motion.div>

          {/* H1 */}
          <motion.h1 {...fade(0.22)} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 4.5vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "var(--charcoal)",
            marginBottom: "1.6rem",
          }}>
            {t("Trasformiamo", "Transforming")}<br />
            {t("i tuoi spazi", "Your Spaces")}<br />
            {t("con ", "with ")}
            <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>
              {t("Precisione", "Artisan Precision")}
            </em>
            {t(" Artigiana", "")}
          </motion.h1>

          {/* Description */}
          <motion.p {...fade(0.34)} style={{
            fontSize: "1rem", fontWeight: 300, lineHeight: 1.85,
            color: "var(--text-muted)", marginBottom: "2.5rem",
            maxWidth: "440px",
          }}>
            {t(
              "Progettiamo e installiamo controsoffitti in cartongesso con sistemi LED integrati. Soluzioni su misura per residenze e spazi commerciali.",
              "We design and install drywall ceilings with integrated LED systems. Custom solutions for homes and commercial spaces."
            )}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.44)} style={{
            display: "flex", alignItems: "center", gap: "1rem",
            marginBottom: "3.5rem", flexWrap: "wrap",
          }}>
            <Magnet strength={4} padding={30}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.78rem", fontWeight: 500,
                  color: "var(--white)", background: "var(--warm-brown)",
                  padding: "0.9rem 2rem", textDecoration: "none",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  transition: "background 0.25s",
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--charcoal)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--warm-brown)")}
              >
                <span>💬</span> {t("Scrivici ora", "Message Us")}
              </a>
            </Magnet>
            <a
              href="#work"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem", fontWeight: 400,
                color: "var(--warm-brown)",
                border: "1px solid var(--border-strong)",
                padding: "0.9rem 1.8rem", textDecoration: "none",
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "all 0.25s",
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
          </motion.div>

          {/* Stats */}
          <motion.div {...fade(0.54)} style={{
            display: "flex", gap: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
          }}>
            {[
              { num: "200+", it: "Progetti Realizzati", en: "Projects Delivered" },
              { num: "10+", it: "Anni di Esperienza", en: "Years of Experience" },
              { num: "100%", it: "Soddisfazione", en: "Satisfaction" },
            ].map((s) => (
              <div key={s.num}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.2rem", fontWeight: 300,
                  color: "var(--warm-brown)", lineHeight: 1, marginBottom: "0.3rem",
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontSize: "0.62rem", fontWeight: 400,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}>
                  {t(s.it, s.en)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating accent — top right decorative label */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            position: "absolute",
            right: "3rem", bottom: "3rem",
            zIndex: 2,
            display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.3rem",
          }}
        >
          <span style={{
            fontSize: "0.6rem", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--ivory)",
            background: "var(--warm-brown)",
            padding: "0.3rem 0.7rem",
          }}>
            {t("Preventivo Gratuito", "Free Quote")}
          </span>
          <span style={{
            fontSize: "0.6rem", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--text-muted)",
          }}>
            Italia
          </span>
        </motion.div>
      </section>

      {/* ── MOBILE ── */}
      <section
        className="hero-mobile"
        style={{
          position: "relative", minHeight: "100svh",
          paddingTop: "68px", display: "flex",
          flexDirection: "column", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Controsoffitto LED"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority sizes="100vw"
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(245,239,224,0) 0%, rgba(245,239,224,0) 30%, rgba(245,239,224,0.88) 60%, rgba(245,239,224,1) 75%)",
          }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, marginTop: "auto", padding: "2rem 1.5rem 3rem" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "0.6rem",
            fontSize: "0.62rem", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--gold)", marginBottom: "1.2rem",
          }}>
            <span style={{ display: "block", width: "22px", height: "1px", background: "var(--gold)" }} />
            {t("Specialisti LED & Cartongesso", "LED & Drywall Specialists")}
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 10vw, 3.2rem)",
            fontWeight: 300, lineHeight: 1.06,
            color: "var(--charcoal)", marginBottom: "1rem",
          }}>
            {t("Trasformiamo i Tuoi", "Transforming Your")}<br />
            {t("Spazi con ", "Spaces with ")}
            <em style={{ color: "var(--warm-brown)" }}>{t("Precisione Artigiana", "Artisan Precision")}</em>
          </h1>
          <p style={{
            fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.8,
            color: "var(--text-muted)", marginBottom: "1.8rem",
          }}>
            {t(
              "Controsoffitti LED su misura per case e spazi commerciali in tutta Italia.",
              "Custom LED ceilings for homes and commercial spaces across Italy."
            )}
          </p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: "0.75rem", fontWeight: 500,
                color: "var(--white)", background: "var(--warm-brown)",
                padding: "0.85rem 1.6rem", textDecoration: "none",
                letterSpacing: "0.08em", textTransform: "uppercase",
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
              }}>
              <span>💬</span> {t("Scrivici", "Message Us")}
            </a>
            <a href="#work" style={{
              fontSize: "0.75rem", fontWeight: 400,
              color: "var(--warm-brown)", border: "1px solid var(--border-strong)",
              padding: "0.85rem 1.4rem", textDecoration: "none",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              {t("I Lavori →", "Our Work →")}
            </a>
          </div>
          <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
            {[
              { num: "200+", it: "Progetti", en: "Projects" },
              { num: "10+", it: "Anni", en: "Years" },
              { num: "100%", it: "Soddisfazione", en: "Satisfaction" },
            ].map((s) => (
              <div key={s.num}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem", fontWeight: 300,
                  color: "var(--warm-brown)", lineHeight: 1, marginBottom: "0.2rem",
                }}>{s.num}</div>
                <div style={{
                  fontSize: "0.58rem", letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "var(--text-muted)",
                }}>{t(s.it, s.en)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-desktop { display: flex !important; }
        .hero-mobile  { display: none !important; }
        @media (max-width: 900px) {
          .hero-desktop { display: none !important; }
          .hero-mobile  { display: flex !important; }
        }
      `}</style>
    </>
  );
}