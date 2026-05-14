"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useLang } from "@/lib/LangContext";
import { PHONE, WHATSAPP_URL } from "@/lib/data";
import Image from "next/image";

export default function Contact() {
  const { t } = useLang();
  const [state, handleSubmit] = useForm("xaqarbpj");

  return (
    <section id="contact" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>

      {/* ── BACKGROUND IMAGE ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/contact-bg.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Dark overlay — stronger on left for text readability */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(20,14,8,0.88) 0%, rgba(20,14,8,0.72) 50%, rgba(20,14,8,0.30) 100%)",
        }} />
      </div>

      {/* ── CONTENT ── */}
      <div className="contact-inner" style={{ position: "relative", zIndex: 1 }}>

        {/* LEFT — text + contact info */}
        <div className="contact-left">

          {/* eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.7rem",
            fontSize: "0.62rem", fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--gold)", marginBottom: "1.6rem",
          }}>
            <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold)" }} />
            {t("Iniziamo a Collaborare", "Let's Collaborate")}
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
            fontWeight: 300, lineHeight: 1.08,
            color: "#fff", marginBottom: "1rem",
          }}>
            {t("Parliamo del", "Let's Talk About")}<br />
            {t("tuo ", "your ")}<em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              {t("progetto.", "project.")}
            </em>
          </h2>

          {/* Gold rule */}
          <span style={{
            display: "block", width: "36px", height: "1.5px",
            background: "var(--gold)", margin: "1.4rem 0 1.6rem",
          }} />

          {/* Subtext */}
          <p style={{
            fontSize: "0.93rem", fontWeight: 300,
            lineHeight: 1.85, color: "rgba(255,255,255,0.70)",
            marginBottom: "2.8rem", maxWidth: "380px",
          }}>
            {t(
              "Raccontaci la tua idea. Ti risponderemo entro 24 ore con una valutazione onesta e un percorso chiaro.",
              "Tell us about your idea. We'll respond within 24 hours with an honest assessment and a clear path forward."
            )}
          </p>

          {/* Contact badges */}
          <div style={{ display: "flex", gap: "1.4rem", flexWrap: "wrap", marginBottom: "2.4rem" }}>
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                ),
                label: t("Telefono", "Phone"),
                value: PHONE,
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: t("Zona Operativa", "Operating Area"),
                value: "Italia",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                label: t("Risposta in", "Response in"),
                value: t("Meno di 24 ore", "Under 24 hours"),
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "0.7rem",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(200,155,80,0.25)",
                borderRadius: "100px",
                padding: "0.55rem 1.1rem",
              }}>
                <span style={{ color: "var(--gold)", display: "flex" }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#fff", fontWeight: 400 }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="wa-btn"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t("Scrivici su WhatsApp", "Message Us on WhatsApp")}
            <span style={{ marginLeft: "auto" }}>→</span>
          </a>
        </div>

        {/* RIGHT — Form card */}
        <div className="contact-right">
          <div className="contact-card">
            {state.succeeded ? (
              <div style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: "rgba(107,76,42,0.1)", border: "1px solid var(--gold)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.5rem", fontSize: "1.4rem", color: "var(--gold)",
                }}>✓</div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem", marginBottom: "0.75rem",
                  color: "var(--charcoal)", fontWeight: 400,
                }}>
                  {t("Messaggio inviato!", "Message sent!")}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                  {t(
                    "Ti risponderemo entro 24 ore.",
                    "We'll get back to you within 24 hours."
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                {/* Nome */}
                <div className="cf-field">
                  <label className="cf-label">{t("Nome Completo", "Nome Completo")}</label>
                  <div className="cf-input-wrap">
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Mario Rossi"
                      className="cf-input"
                    />
                    <span className="cf-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                    </span>
                  </div>
                  <ValidationError field="name" errors={state.errors} style={{ fontSize: "0.72rem", color: "red", marginTop: "0.2rem" }} />
                </div>

                {/* Email + Telefono */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className="cf-field">
                    <label className="cf-label">Email</label>
                    <div className="cf-input-wrap">
                      <input
                        id="email" name="email" type="email" required
                        placeholder="mario@email.it"
                        className="cf-input"
                      />
                      <span className="cf-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </span>
                    </div>
                    <ValidationError field="email" errors={state.errors} style={{ fontSize: "0.72rem", color: "red", marginTop: "0.2rem" }} />
                  </div>

                  <div className="cf-field">
                    <label className="cf-label">{t("Telefono", "Telefono")}</label>
                    <div className="cf-input-wrap">
                      <input
                        id="phone" name="phone" type="tel"
                        placeholder="+39 000 000 0000"
                        className="cf-input"
                      />
                      <span className="cf-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Messaggio */}
                <div className="cf-field">
                  <label className="cf-label">{t("Descrivi il Progetto", "Descrivi il Progetto")}</label>
                  <div className="cf-input-wrap cf-textarea-wrap">
                    <textarea
                      id="message" name="message" required rows={4}
                      placeholder={t(
                        "Es. Vorrei un controsoffitto con LED in soggiorno, circa 30mq...",
                        "e.g. I'd like a LED drop ceiling in my living room, approx 30sqm..."
                      )}
                      className="cf-input cf-textarea"
                    />
                    <span className="cf-icon cf-icon--textarea">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                      </svg>
                    </span>
                  </div>
                  <ValidationError field="message" errors={state.errors} style={{ fontSize: "0.72rem", color: "red", marginTop: "0.2rem" }} />
                </div>

                <ValidationError errors={state.errors} style={{ fontSize: "0.8rem", color: "red" }} />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="cf-submit"
                >
                  <span>{state.submitting ? t("Invio in corso…", "Sending…") : t("Invia Richiesta", "Send Inquiry")}</span>
                  {!state.submitting && <span>→</span>}
                </button>

                {/* Privacy note */}
                <p style={{
                  textAlign: "center", fontSize: "0.72rem",
                  color: "var(--text-muted, #999)", marginTop: "0.2rem",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  {t("I tuoi dati sono al sicuro con noi. Non condividiamo le tue informazioni.", "Your data is safe with us. We never share your information.")}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        /* ── LAYOUT ── */
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 100vh;
          padding: 8rem 5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ── CARD ── */
        .contact-card {
          background: rgba(252, 248, 241, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.8rem 2.4rem;
          box-shadow: 0 32px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(200,160,90,0.12);
        }

        /* ── FORM FIELDS ── */
        .cf-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .cf-label {
          font-size: 0.62rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--charcoal, #3a3028);
          font-weight: 600;
        }
        .cf-input-wrap {
          position: relative;
          background: rgba(245, 238, 224, 0.6);
          border: 1px solid rgba(180,145,80,0.2);
          border-radius: 10px;
          transition: border-color 0.2s, background 0.2s;
        }
        .cf-input-wrap:focus-within {
          border-color: rgba(180,145,80,0.55);
          background: rgba(255,252,245,0.9);
        }
        .cf-input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          padding: 0.85rem 2.8rem 0.85rem 1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 300;
          color: var(--charcoal, #3a3028);
          border-radius: 10px;
        }
        .cf-textarea {
          resize: none;
          min-height: 110px;
          padding-right: 2.8rem;
        }
        .cf-textarea-wrap { align-items: flex-start; }
        .cf-input::placeholder { color: rgba(100,80,60,0.4); }
        .cf-icon {
          position: absolute;
          right: 0.9rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(150,120,70,0.5);
          display: flex;
          pointer-events: none;
        }
        .cf-icon--textarea {
          top: 0.9rem;
          transform: none;
        }

        /* ── SUBMIT ── */
        .cf-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          width: 100%;
          background: #2c1f0e;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 1.05rem 1.8rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          margin-top: 0.2rem;
        }
        .cf-submit:hover {
          background: #3d2a10;
          transform: translateY(-1px);
        }
        .cf-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* ── WHATSAPP BTN ── */
        .wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(200,155,80,0.35);
          color: #fff;
          text-decoration: none;
          padding: 0.85rem 1.6rem;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          transition: background 0.25s, border-color 0.25s;
          max-width: 320px;
        }
        .wa-btn:hover {
          background: rgba(37,211,102,0.12);
          border-color: rgba(37,211,102,0.5);
        }

        /* ── MOBILE ── */
        @media (max-width: 960px) {
          .contact-inner {
            grid-template-columns: 1fr;
            padding: 5rem 1.5rem 4rem;
            gap: 3rem;
            min-height: auto;
          }
          .contact-card {
            padding: 2rem 1.5rem;
          }
        }
        @media (max-width: 560px) {
          .contact-inner > .contact-right .cf-field:nth-child(2) > div,
          .contact-inner form > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}