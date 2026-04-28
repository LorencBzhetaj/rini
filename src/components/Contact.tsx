"use client";
import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import { PHONE, WHATSAPP_URL } from "@/lib/data";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");

  const res = await fetch("https://formspree.io/f/xaqarbpj", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    setStatus("sent");
  } else {
    setStatus("error");
  }
};

  const inputStyle: React.CSSProperties = {
    background: "transparent",
    border: "none",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.93rem",
    fontWeight: 300,
    color: "var(--charcoal)",
    width: "100%",
    padding: 0,
  };

  const groupStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "1.6rem",
    borderBottom: "1px solid var(--border)",
    marginBottom: "1.6rem",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.65rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    fontWeight: 500,
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 3rem",
        background: "var(--ivory-dark)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
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
            {t("Iniziamo a Collaborare", "Let's Collaborate")}
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.9rem, 3vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              marginBottom: "1rem",
            }}
          >
            {t("Pronto a Costruire ", "Ready to Build ")}
            <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>
              {t("Qualcosa di Straordinario?", "Something Remarkable?")}
            </em>
          </h2>
          <p
            style={{
              fontSize: "0.93rem",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "var(--text-muted)",
              marginBottom: "2.5rem",
            }}
          >
            {t(
              "Raccontaci il tuo progetto. Risponderemo entro 24 ore con una valutazione onesta e un percorso chiaro. Sopralluogo e preventivo sempre gratuiti.",
              "Tell us about your project. We'll respond within 24 hours with an honest assessment and a clear path forward. Site visit and quote always free."
            )}
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "2rem" }}>
            {[
              {
                icon: "📱",
                label: t("Telefono", "Phone"),
                value: (
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    style={{ color: "var(--charcoal)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--warm-brown)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--charcoal)")}
                  >
                    {PHONE}
                  </a>
                ),
              },
              {
                icon: "📍",
                label: t("Zona Operativa", "Operating Area"),
                value: <span>Italia</span>,
              },
              {
                icon: "⏱",
                label: t("Risposta in", "Response in"),
                value: <span>{t("Meno di 24 ore", "Under 24 hours")}</span>,
              },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    flexShrink: 0,
                    background: "var(--gold-dim)",
                    border: "1px solid var(--border-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.64rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 500, marginBottom: "0.2rem" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "var(--charcoal)", fontWeight: 400 }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              background: "rgba(37,211,102,0.1)",
              border: "1px solid rgba(37,211,102,0.3)",
              color: "#16A34A",
              textDecoration: "none",
              padding: "0.85rem 1.6rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(37,211,102,0.18)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(37,211,102,0.1)")
            }
            aria-label="Contattaci su WhatsApp"
          >
            <span aria-hidden="true">💬</span>
            {t("Scrivici su WhatsApp", "Message Us on WhatsApp")}
          </a>
        </div>

        {/* Right — Form */}
        <form onSubmit={handleSubmit} noValidate>
          {status === "sent" ? (
            <div
              style={{
                padding: "3rem 2rem",
                textAlign: "center",
                border: "1px solid var(--border)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                  color: "var(--warm-brown)",
                }}
              >
                {t("Messaggio inviato!", "Message sent!")}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                {t(
                  "Ti risponderemo entro 24 ore. Nel frattempo puoi scriverci anche su WhatsApp.",
                  "We'll get back to you within 24 hours. In the meantime, feel free to message us on WhatsApp."
                )}
              </p>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1.5rem" }}>
                <div style={groupStyle}>
                  <label htmlFor="name" style={labelStyle}>
                    {t("Nome Completo", "Full Name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Mario Rossi"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ ...inputStyle, color: "var(--charcoal)" }}
                  />
                </div>
                <div style={groupStyle}>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="mario@email.it"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={groupStyle}>
                <label htmlFor="phone" style={labelStyle}>
                  {t("Telefono", "Phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+39 000 000 0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div style={{ ...groupStyle, marginBottom: "2rem" }}>
                <label htmlFor="message" style={labelStyle}>
                  {t("Descrivi il Progetto", "Project Brief")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder={t(
                    "Es. Vorrei un controsoffitto con LED in soggiorno, circa 30mq...",
                    "e.g. I'd like a LED drop ceiling in my living room, approx 30sqm..."
                  )}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none", minHeight: "80px" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: status === "sending" ? "var(--warm-brown-light)" : "var(--warm-brown)",
                  color: "var(--white)",
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.95rem 2.2rem",
                  transition: "background 0.25s",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending")
                    (e.currentTarget as HTMLElement).style.background = "var(--charcoal)";
                }}
                onMouseLeave={(e) => {
                  if (status !== "sending")
                    (e.currentTarget as HTMLElement).style.background = "var(--warm-brown)";
                }}
              >
                {status === "sending"
                  ? t("Invio in corso…", "Sending…")
                  : t("Invia Richiesta →", "Send Inquiry →")}
              </button>
            </>
          )}
        </form>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--text-light); }
        @media (max-width: 900px) {
          #contact { padding: 5rem 1.5rem !important; }
          #contact > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
