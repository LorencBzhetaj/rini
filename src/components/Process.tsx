"use client";
import { useLang } from "@/lib/LangContext";
import FadeIn from "./FadeIn";

const steps = [
  { n: "01", it: "Ascoltiamo le tue idee", en: "We listen to your ideas", descIT: "Capiamo le tue esigenze, i tuoi gusti e il tuo budget.", descEN: "We understand your needs, tastes, and budget." },
  { n: "02", it: "Progettiamo insieme", en: "We design together", descIT: "Creiamo un progetto su misura con materiali e soluzioni LED.", descEN: "We create a custom project with materials and LED solutions." },
  { n: "03", it: "Realizziamo il progetto", en: "We build the project", descIT: "La nostra squadra lavora con precisione e cura per ogni dettaglio.", descEN: "Our team works with precision and care for every detail." },
  { n: "04", it: "Consegna & Supporto", en: "Delivery & Support", descIT: "Consegniamo nei tempi concordati e restiamo a disposizione.", descEN: "We deliver on time and remain available for any need." },
];

export default function Process() {
  const { t } = useLang();
  return (
    <section style={{ padding: "7rem 3rem", background: "var(--bg)" }}>
      <FadeIn y={30}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--gold2)", marginBottom: "1rem",
          }}>
            <span style={{ display: "block", width: "20px", height: "1px", background: "var(--gold)" }} />
            {t("Come Lavoriamo", "How We Work")}
            <span style={{ display: "block", width: "20px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 400, color: "var(--text)", lineHeight: 1.2,
          }}>
            {t("Semplice, chiaro, ", "Simple, clear, ")}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>{t("efficace.", "effective.")}</em>
          </h2>
        </div>
      </FadeIn>

      {/* Desktop horizontal */}
      <div className="process-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", position: "relative" }}>
        {/* connecting line */}
        <div style={{ position: "absolute", top: "2.2rem", left: "12.5%", right: "12.5%", height: "1px", background: "var(--border)", zIndex: 0 }} />
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.1} y={20}>
            <div style={{ textAlign: "center", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: "var(--bg2)", border: "2px solid var(--gold-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.5rem",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1rem", fontWeight: 600, color: "var(--gold)",
              }}>{step.n}</div>
              <h3 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem", fontWeight: 500,
                color: "var(--text)", marginBottom: "0.6rem",
              }}>{t(step.it, step.en)}</h3>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7, fontWeight: 300 }}>
                {t(step.descIT, step.descEN)}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mobile vertical */}
      <div className="process-mobile" style={{ display: "none", flexDirection: "column", gap: "0" }}>
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.08} y={16}>
            <div style={{
              display: "flex", gap: "1.25rem", padding: "1.5rem 0",
              borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                background: "var(--bg2)", border: "2px solid var(--gold-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.95rem", fontWeight: 600, color: "var(--gold)",
              }}>{step.n}</div>
              <div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text)", marginBottom: "0.4rem" }}>
                  {t(step.it, step.en)}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7, fontWeight: 300 }}>
                  {t(step.descIT, step.descEN)}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        .process-desktop { display: grid !important; }
        .process-mobile { display: none !important; }
        @media (max-width: 760px) {
          section { padding: 5rem 1.5rem !important; }
          .process-desktop { display: none !important; }
          .process-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  );
}