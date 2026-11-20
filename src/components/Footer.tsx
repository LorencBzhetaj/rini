"use client";
import { useLang } from "@/lib/LangContext";
import Link from "next/link";
import { PHONE } from "@/lib/data";

const SERVICE_LINKS = [
  { href: "/controsoffitti-led", it: "Controsoffitti LED", en: "LED ceilings" },
  { href: "/pareti-attrezzate", it: "Pareti attrezzate", en: "Feature walls" },
  { href: "/frame-led-geometrici", it: "Frame LED geometrici", en: "Geometric LED frames" },
  { href: "/illuminazione-lineare", it: "Illuminazione lineare LED", en: "Linear LED lighting" },
  { href: "/cartongesso-residenziale", it: "Pareti in cartongesso", en: "Drywall partitions" },
  { href: "/cartongesso-su-misura", it: "Cartongesso su misura", en: "Bespoke drywall" },
  { href: "/montaggio-cartongesso", it: "Montaggio cartongesso", en: "Drywall installation" },
  { href: "/cartongesso-prezzo-al-mq", it: "Cartongesso: prezzo al mq", en: "Drywall cost per m²" },
];

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
            fontFamily: "var(--font-display), serif",
            fontSize: "1.05rem",
            fontStyle: "italic",
            color: "var(--warm-brown)",
          }}
        >
          M.B Cartongesso
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
              { href: "/#services", it: "Servizi", en: "Services" },
              { href: "/#why", it: "Chi Siamo", en: "Why Us" },
              { href: "/#work", it: "Lavori", en: "Work" },
              { href: "/#contact", it: "Contatti", en: "Contact" },
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
            © {year} M.B Cartongesso —{" "}
            {t("Tutti i diritti riservati", "All rights reserved")} · Italia
          </div>
        </div>
      </div>

      <nav
        aria-label={t("Servizi in cartongesso", "Drywall services")}
        style={{ borderTop: "1px solid var(--border)", marginTop: "1.8rem", paddingTop: "1.4rem" }}
      >
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.6rem", listStyle: "none", margin: 0, padding: 0 }}>
          {SERVICE_LINKS.map((link) => (
            <li key={link.href} style={{ listStyle: "none" }}>
              <Link href={link.href} style={{ fontSize: "0.75rem", color: "var(--text-muted)", textDecoration: "none" }}>
                {t(link.it, link.en)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

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