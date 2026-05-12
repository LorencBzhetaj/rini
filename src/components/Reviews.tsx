"use client";
import { useLang } from "@/lib/LangContext";
import FadeIn from "./FadeIn";

const reviews = [
  { name: "Marco B.", location: "Milano", rating: 5, it: "Lavoro eccellente, precisione e cura nei minimi dettagli. Il soffitto LED che hanno realizzato ha trasformato completamente il nostro soggiorno. Consigliatissimi!", en: "Excellent work, precision and care in every detail. The LED ceiling they created completely transformed our living room. Highly recommended!" },
  { name: "Giulia R.", location: "Roma", rating: 5, it: "Professionali, puntuali e gentilissimi. Hanno rispettato i tempi e il budget concordato. Il risultato finale supera ogni aspettativa.", en: "Professional, punctual, and very kind. They respected the agreed time and budget. The final result exceeds all expectations." },
  { name: "Antonio C.", location: "Napoli", rating: 5, it: "Squadra fantastica, ottima qualità dei materiali. Il controsoffitto in cartongesso con LED è bellissimo. Sicuramente li chiamerò per altri lavori.", en: "Fantastic team, excellent material quality. The LED drywall ceiling is beautiful. I will definitely call them for future projects." },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "0.85rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C89555">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { t } = useLang();
  return (
    <section id="reviews" style={{ padding: "7rem 3rem", background: "var(--cream)" }}>
      <FadeIn y={30}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--gold2)", marginBottom: "1rem",
          }}>
            <span style={{ display: "block", width: "20px", height: "1px", background: "var(--gold)" }} />
            {t("Cosa Dicono i Clienti", "What Clients Say")}
            <span style={{ display: "block", width: "20px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 400, color: "var(--text)",
          }}>
            {t("Clienti soddisfatti, ", "Clients satisfied, ")}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>{t("sempre.", "always.")}</em>
          </h2>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        {reviews.map((r, i) => (
          <FadeIn key={i} delay={i * 0.1} y={20}>
            <div style={{
              background: "var(--white)", border: "1px solid var(--border)",
              borderRadius: "16px", padding: "2rem",
              boxShadow: "var(--shadow)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)"; }}
            >
              <Stars count={r.rating} />
              <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem", fontStyle: "italic" }}>
                "{t(r.it, r.en)}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "50%",
                  background: "var(--gold-dim)", border: "1px solid var(--gold-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.85rem", fontWeight: 600, color: "var(--gold2)",
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{r.name}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{r.location}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`@media(max-width:760px){ #reviews{padding:5rem 1.5rem !important;} }`}</style>
    </section>
  );
}