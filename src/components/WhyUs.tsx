"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { whyCards } from "@/lib/data";
import { useState } from "react";

export default function WhyUs() {
  const { t } = useLang();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="why"
      style={{
        padding: "8rem 3rem",
        background: "var(--ivory-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/why-bg.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", opacity: 0.07 }}
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: "600px", marginBottom: "5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.2rem",
            }}
          >
            <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold)" }} />
            {t("La Nostra Filosofia", "Our Philosophy")}
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              marginBottom: "1rem",
            }}
          >
            {t("Perché Lavorare ", "Why Work ")}
            <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>
              {t("Con Noi", "With Us")}
            </em>
          </h2>
          <p
            style={{
              fontSize: "0.93rem",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "var(--text-muted)",
            }}
          >
            {t(
              "Crediamo che i grandi spazi nascano dall'incontro tra design intelligente e artigianalità rigorosa. Ecco cosa ci distingue.",
              "We believe great spaces are born from intelligent design and rigorous craftsmanship. Here's what sets us apart."
            )}
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {whyCards.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? "var(--ivory)" : "var(--ivory-dark)",
                padding: "2.8rem 2.5rem",
                transition: "background 0.3s",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  color: "var(--gold)",
                  marginBottom: "1.5rem",
                  display: "block",
                }}
              >
                {card.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  marginBottom: "0.85rem",
                }}
              >
                {t(card.titleIT, card.titleEN)}
              </h3>
              <p
                style={{
                  fontSize: "0.86rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "var(--text-muted)",
                }}
              >
                {t(card.descIT, card.descEN)}
              </p>
              <span
                style={{
                  position: "absolute",
                  bottom: "1.8rem",
                  right: "2rem",
                  color: hovered === i ? "var(--gold)" : "var(--border-strong)",
                  fontSize: "1rem",
                  transition: "color 0.3s, transform 0.3s",
                  transform: hovered === i ? "translate(3px, -3px)" : "none",
                  display: "block",
                }}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #why { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
