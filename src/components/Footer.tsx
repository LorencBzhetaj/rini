"use client";
import { useLang } from "@/lib/LangContext";
import { PHONE, WHATSAPP_URL } from "@/lib/data";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--ivory)",
        padding: "2.5rem 3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.05rem",
            fontStyle: "italic",
            color: "var(--warm-brown)",
          }}
        >
          Mr. Cartongesso
        </div>

        <nav aria-label="Link footer">
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              flexWrap: "wrap",
            }}
          >
            {[
              { href: "#services", it: "Servizi", en: "Services" },
              { href: "#why", it: "Chi Siamo", en: "Why Us" },
              { href: "#work", it: "Lavori", en: "Work" },
              { href: "#contact", it: "Contatti", en: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--warm-brown)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text-muted)")
                  }
                >
                  {t(link.it, link.en)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontSize: "0.73rem",
              color: "var(--text-light)",
              marginBottom: "0.3rem",
            }}
          >
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              style={{
                color: "var(--text-light)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--warm-brown)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--text-light)")
              }
            >
              {PHONE}
            </a>
          </div>
          <div style={{ fontSize: "0.73rem", color: "var(--text-light)" }}>
            © {year} Mr. Cartongesso —{" "}
            {t("Tutti i diritti riservati", "All rights reserved")} · Italia
          </div>
        </div>
      </div>

      {/* Structured data for footer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mr. Cartongesso",
            url: "https://www.mrcartongesso.it",
            logo: "https://www.mrcartongesso.it/images/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+393889995326",
              contactType: "customer service",
              availableLanguage: ["Italian", "English"],
            },
            sameAs: [`${WHATSAPP_URL}`],
          }),
        }}
      />

      <style>{`
        @media (max-width: 900px) {
          footer { padding: 2rem 1.5rem !important; }
          footer > div { flex-direction: column; align-items: flex-start !important; }
          footer > div > div:last-child { text-align: left !important; }
        }
      `}</style>
    </footer>
  );
}
