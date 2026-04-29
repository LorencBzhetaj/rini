"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { whyCards } from "@/lib/data";
import { useState } from "react";

export default function WhyUs() {
  const { t } = useLang();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="why" style={{ position: "relative", overflow: "hidden" }}>

      {/* ── BACKGROUND IMAGE ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/why-bg.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="why-overlay" />
      </div>

      {/* ── CONTENT ── */}
      <div className="why-inner" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ maxWidth: "600px", marginBottom: "4rem" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "0.7rem",
            fontSize: "0.65rem", fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--gold)", marginBottom: "1.2rem",
          }}>
            <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold)" }} />
            {t("La Nostra Filosofia", "Our Philosophy")}
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
            fontWeight: 300, lineHeight: 1.12, marginBottom: "1rem",
          }}>
            {t("Perché Lavorare ", "Why Work ")}
            <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>
              {t("Con Noi", "With Us")}
            </em>
          </h2>
          <p style={{
            fontSize: "0.93rem", fontWeight: 300,
            lineHeight: 1.9, color: "var(--charcoal)",
          }}>
            {t(
              "Crediamo che i grandi spazi nascano dall'incontro tra design intelligente e artigianalità rigorosa. Ecco cosa ci distingue.",
              "We believe great spaces are born from intelligent design and rigorous craftsmanship. Here's what sets us apart."
            )}
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1px",
          background: "rgba(107,76,42,0.18)",
          border: "1px solid rgba(107,76,42,0.18)",
        }}>
          {whyCards.map((card, i) => (
            <div
              key={i}
              className="why-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ position: "relative", padding: "2.5rem 2rem" }}
            >
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.85rem", fontStyle: "italic",
                color: "var(--gold)", marginBottom: "1.2rem", display: "block",
              }}>
                {card.num}
              </span>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.25rem", fontWeight: 400,
                color: "var(--charcoal)", marginBottom: "0.75rem",
              }}>
                {t(card.titleIT, card.titleEN)}
              </h3>
              <p style={{
                fontSize: "0.85rem", fontWeight: 300,
                lineHeight: 1.85, color: "var(--charcoal-mid)",
              }}>
                {t(card.descIT, card.descEN)}
              </p>
              <span style={{
                position: "absolute", bottom: "1.5rem", right: "1.8rem",
                color: hovered === i ? "var(--gold)" : "rgba(107,76,42,0.25)",
                fontSize: "1rem",
                transition: "color 0.3s, transform 0.3s",
                transform: hovered === i ? "translate(3px,-3px)" : "none",
              }} aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── DESKTOP ── */
        .why-overlay {
          position: absolute; inset: 0;
          background: rgba(245,239,224,0.78);
        }
        .why-inner {
          padding: 8rem 3rem;
        }
        .why-card {
          background: rgba(245,239,224,0.72);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background 0.3s;
        }
        .why-card:hover {
          background: rgba(253,250,245,0.90);
        }

        /* ── MOBILE ── image very visible, cards minimal */
        @media (max-width: 900px) {
          .why-overlay {
            /* Top: almost no tint — image fully visible */
            /* Bottom: heavier so cards readable */
            background: linear-gradient(
              to bottom,
              rgba(245,239,224,0.08) 0%,
              rgba(245,239,224,0.08) 30%,
              rgba(245,239,224,0.70) 62%,
              rgba(245,239,224,0.96) 100%
            ) !important;
          }
          .why-inner {
            padding: 5rem 1.5rem !important;
          }
          .why-card {
            background: rgba(245,239,224,0.60) !important;
            backdrop-filter: blur(6px) !important;
            -webkit-backdrop-filter: blur(6px) !important;
          }
        }
      `}</style>
    </section>
  );
}