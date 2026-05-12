"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { whyCards } from "@/lib/data";
import { useState } from "react";

// Icon components (gold outlined style matching screenshot)
const icons = [
  // i — Design (pencil/ruler)
  <svg key="i" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22L9 17M9 17L20 6L22 8L11 19M9 17L11 19M7 24H21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 4L24 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>,
  // ii — LED (horizontal lines)
  <svg key="ii" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H24M4 14H24M4 18H18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="22" cy="18" r="2" stroke="currentColor" strokeWidth="1.3"/>
  </svg>,
  // iii — Materials (shield star)
  <svg key="iii" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3L5 7V14C5 19 9 23.5 14 25C19 23.5 23 19 23 14V7L14 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M14 10L15.2 12.5L18 13L16 15L16.5 18L14 16.7L11.5 18L12 15L10 13L12.8 12.5L14 10Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>,
  // iv — Transparency (eye)
  <svg key="iv" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14C3 14 7 7 14 7C21 7 25 14 25 14C25 14 21 21 14 21C7 21 3 14 3 14Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.3"/>
  </svg>,
  // v — Result-Oriented (target)
  <svg key="v" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
    <path d="M21 7L23 5M23 5H20M23 5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

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
        <div style={{ maxWidth: "600px", marginBottom: "3rem" }}>
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
            fontSize: "clamp(2.4rem, 4vw, 4rem)",
            fontWeight: 600,
            lineHeight: 1.08,
            marginBottom: "1rem",
            color: "var(--charcoal)",
          }}>
            {t("Perché Lavorare ", "Why Work ")}
            <br />
            <em style={{ fontStyle: "italic", color: "var(--warm-brown)", fontWeight: 400 }}>
              {t("Con Noi", "With Us")}
            </em>
          </h2>
          {/* small gold rule under heading */}
          <span style={{
            display: "block", width: "36px", height: "1.5px",
            background: "var(--gold)", marginBottom: "1.2rem",
          }} />
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
        <div className="why-grid">
          {whyCards.map((card, i) => (
            <div
              key={i}
              className={`why-card${hovered === i ? " why-card--active" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon circle */}
              <div className="why-card__icon">
                <span style={{ color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {icons[i]}
                </span>
              </div>

              {/* Number */}
              <span className="why-card__num">{card.num}</span>

              {/* Title */}
              <h3 className="why-card__title">
                {t(card.titleIT, card.titleEN)}
              </h3>

              {/* Gold rule */}
              <span className="why-card__rule" />

              {/* Description */}
              <p className="why-card__desc">
                {t(card.descIT, card.descEN)}
              </p>

              {/* Arrow button */}
              <div className="why-card__arrow">
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA BANNER ── */}
        <div className="why-cta">
          <div className="why-cta__left">
            <div className="why-cta__icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 2C4 2 3 2 2.5 3C2 4 2 5 2.5 6.5C3.5 9.5 6 13 9 16C12 19 15.5 21.5 18.5 22.5C20 23 21 23 22 22.5C23 22 22 21 22 21L19.5 18.5C19.5 18.5 19 18 18 18.5C17 19 16.5 20 16.5 20C16.5 20 13 18.5 10 15.5C7 12.5 5.5 9 5.5 9C5.5 9 6.5 8.5 7 7.5C7.5 6.5 7 6 7 6L4.5 3.5C4.5 3.5 4.5 2 4 2Z" stroke="var(--gold)" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="why-cta__heading">
                {t("Hai un progetto in mente?", "Have a project in mind?")}
              </p>
              <p className="why-cta__sub">
                {t(
                  "Parliamo e creiamo la soluzione perfetta per il tuo spazio.",
                  "Let's talk and create the perfect solution for your space."
                )}
              </p>
            </div>
          </div>
          <button className="why-cta__btn">
            {t("RICHIEDI UN PREVENTIVO", "REQUEST A QUOTE")} &nbsp;→
          </button>
        </div>
      </div>

      <style>{`
        /* ── OVERLAY ── */
        .why-overlay {
          position: absolute; inset: 0;
          background: rgba(245,239,224,0.72);
        }

        /* ── INNER ── */
        .why-inner {
          padding: 7rem 4rem 5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ── GRID ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 2rem;
        }

        /* ── CARD ── */
        .why-card {
          background: rgba(255,252,245,0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(180,155,110,0.18);
          border-radius: 4px;
          padding: 2rem 1.6rem 4rem;
          position: relative;
          cursor: pointer;
          transition: background 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .why-card--active,
        .why-card:hover {
          background: rgba(255,255,255,0.96);
          box-shadow: 0 8px 40px rgba(107,76,42,0.10);
          transform: translateY(-3px);
        }

        /* ── ICON ── */
        .why-card__icon {
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(180,145,80,0.35);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.4rem;
          background: rgba(245,235,210,0.45);
          transition: background 0.3s, border-color 0.3s;
        }
        .why-card:hover .why-card__icon {
          background: rgba(180,145,80,0.12);
          border-color: var(--gold);
        }

        /* ── NUM ── */
        .why-card__num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.78rem;
          font-style: italic;
          color: var(--gold);
          margin-bottom: 0.6rem;
          display: block;
        }

        /* ── TITLE ── */
        .why-card__title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 0.7rem;
          line-height: 1.25;
        }

        /* ── GOLD RULE ── */
        .why-card__rule {
          display: block;
          width: 28px; height: 1.5px;
          background: var(--gold);
          margin-bottom: 0.9rem;
        }

        /* ── DESC ── */
        .why-card__desc {
          font-size: 0.83rem;
          font-weight: 300;
          line-height: 1.85;
          color: var(--charcoal-mid, #6b6560);
        }

        /* ── ARROW ── */
        .why-card__arrow {
          position: absolute;
          bottom: 1.4rem; right: 1.6rem;
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(180,145,80,0.4);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold);
          font-size: 0.85rem;
          transition: background 0.25s, border-color 0.25s;
        }
        .why-card:hover .why-card__arrow {
          background: var(--gold);
          border-color: var(--gold);
          color: #fff;
        }

        /* ── CTA BANNER ── */
        .why-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255,252,245,0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(180,155,110,0.18);
          border-radius: 4px;
          padding: 1.6rem 2rem;
          gap: 2rem;
        }
        .why-cta__left {
          display: flex; align-items: center; gap: 1.4rem;
        }
        .why-cta__icon {
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(180,145,80,0.35);
          display: flex; align-items: center; justify-content: center;
          background: rgba(245,235,210,0.45);
          flex-shrink: 0;
        }
        .why-cta__heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 0.2rem;
        }
        .why-cta__sub {
          font-size: 0.82rem;
          font-weight: 300;
          color: var(--charcoal-mid, #6b6560);
        }
        .why-cta__btn {
          flex-shrink: 0;
          background: var(--warm-brown, #8b6914);
          color: #fff;
          border: none;
          padding: 1rem 2.2rem;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.25s, transform 0.2s;
          white-space: nowrap;
        }
        .why-cta__btn:hover {
          background: var(--gold);
          transform: translateX(2px);
        }

        /* ── TABLET / MOBILE ── */
        @media (max-width: 1100px) {
          .why-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .why-overlay {
            background: linear-gradient(
              to bottom,
              rgba(245,239,224,0.08) 0%,
              rgba(245,239,224,0.08) 30%,
              rgba(245,239,224,0.75) 60%,
              rgba(245,239,224,0.97) 100%
            ) !important;
          }
          .why-inner {
            padding: 5rem 1.5rem 4rem !important;
          }
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .why-cta {
            flex-direction: column;
            align-items: flex-start;
          }
          .why-cta__btn {
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 560px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}