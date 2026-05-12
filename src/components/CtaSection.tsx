"use client";
import { useLang } from "@/lib/LangContext";
import FadeIn from "./FadeIn";
import { WHATSAPP_URL } from "@/lib/data";

export default function CtaSection() {
  const { t } = useLang();
  return (
    <section style={{ padding: "5rem 3rem", background: "var(--bg)" }}>
      <FadeIn y={30}>
        <div style={{
          maxWidth: "800px", margin: "0 auto", textAlign: "center",
          background: "linear-gradient(135deg, var(--cream) 0%, var(--cream2) 100%)",
          border: "1px solid var(--gold-border)",
          borderRadius: "24px", padding: "4rem 3rem",
          position: "relative", overflow: "hidden",
        }}>
          {/* Gold accent corner */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "200px", height: "200px",
            background: "radial-gradient(circle at top right, rgba(200,149,85,0.12) 0%, transparent 70%)",
          }} />
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "var(--gold-dim)", border: "1px solid var(--gold-border)",
            padding: "0.3rem 0.9rem", borderRadius: "100px",
            fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--gold2)",
            marginBottom: "1.5rem",
          }}>✦ {t("Preventivo Gratuito", "Free Quote")}</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 3vw, 3rem)",
            fontWeight: 400, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2,
          }}>
            {t("Hai un progetto in mente?", "Have a project in mind?")}
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--muted)", fontWeight: 300, lineHeight: 1.8, marginBottom: "2.5rem" }}>
            {t(
              "Scrivici su WhatsApp per un preventivo gratuito e senza impegno. Rispondiamo in meno di 24 ore.",
              "Write to us on WhatsApp for a free, no-obligation quote. We respond within 24 hours."
            )}
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: "#25D366", color: "#fff",
            padding: "1rem 2.5rem", borderRadius: "100px",
            textDecoration: "none", fontSize: "0.9rem", fontWeight: 600,
            letterSpacing: "0.02em", transition: "all 0.25s",
            boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 32px rgba(37,211,102,0.5)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(37,211,102,0.4)"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {t("Scrivici su WhatsApp", "Message us on WhatsApp")}
          </a>
        </div>
      </FadeIn>
      <style>{`@media(max-width:760px){ section>div{padding:2.5rem 1.5rem !important;} }`}</style>
    </section>
  );
}