"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { services } from "@/lib/data";
import { useState } from "react";

export default function Services() {
  const { t } = useLang();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" style={{ padding: "6rem 3rem", background: "var(--charcoal)" }}>
      {/* Header */}
      <div style={{ maxWidth: "640px", marginBottom: "4rem" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "0.7rem",
          fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem",
        }}>
          <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold)" }} />
          {t("Cosa Facciamo", "What We Do")}
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 4vw, 3.4rem)",
          fontWeight: 300, lineHeight: 1.12, color: "var(--ivory)", marginBottom: "1rem",
        }}>
          {t("I Nostri ", "Our ")}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>{t("Servizi", "Services")}</em>
        </h2>
        <p style={{ fontSize: "0.93rem", fontWeight: 300, lineHeight: 1.9, color: "var(--text-light)" }}>
          {t(
            "Dall'idea al risultato finale: ogni lavoro è realizzato con cura artigianale, materiali premium e sistemi LED di ultima generazione.",
            "From concept to final result: every project is crafted with artisan care, premium materials, and next-generation LED systems."
          )}
        </p>
      </div>

      {/* Grid */}
      <div className="services-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1px",
        background: "rgba(255,255,255,0.06)",
      }}>
        {services.map((svc, i) => (
          <article
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? "var(--charcoal-mid)" : "var(--charcoal)",
              transition: "background 0.3s",
              overflow: "hidden",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
              <Image
                src={svc.image}
                alt={svc.imageAlt}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s ease, filter 0.4s",
                  transform: hovered === i ? "scale(1.06)" : "scale(1)",
                  filter: hovered === i ? "brightness(0.6)" : "brightness(0.45)",
                }}
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0,
                width: hovered === i ? "100%" : "0",
                height: "2px", background: "var(--gold)",
                transition: "width 0.4s ease",
              }} />
            </div>

            {/* Content */}
            <div style={{ padding: "1.75rem 1.75rem 2rem" }}>
              <span style={{ fontSize: "1.3rem", marginBottom: "0.85rem", display: "block", color: "var(--gold)" }}>
                {svc.icon}
              </span>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.25rem", fontWeight: 400,
                color: "var(--ivory)", marginBottom: "0.75rem", lineHeight: 1.3,
              }}>
                {t(svc.titleIT, svc.titleEN)}
              </h3>
              <p style={{
                fontSize: "0.83rem", fontWeight: 300,
                lineHeight: 1.85, color: "var(--text-light)", marginBottom: "1rem",
              }}>
                {t(svc.descIT, svc.descEN)}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                {svc.items.map((item, j) => (
                  <li key={j} style={{ fontSize: "0.76rem", color: "var(--gold)", letterSpacing: "0.03em" }}>
                    <span style={{ opacity: 0.5 }}>— </span>{t(item.it, item.en)}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          #services { padding: 4rem 1.25rem !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 1000px) {
          #services { padding: 5rem 1.5rem !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}