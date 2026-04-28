"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { WHATSAPP_URL } from "@/lib/data";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "#services", it: "Servizi", en: "Services" },
    { href: "#why", it: "Chi Siamo", en: "Why Us" },
    { href: "#work", it: "Lavori", en: "Our Work" },
    { href: "#contact", it: "Contatti", en: "Contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          inset: "0 0 auto",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 3rem",
          height: "68px",
          background: scrolled ? "rgba(245,239,224,0.97)" : "rgba(245,239,224,0.94)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          transition: "box-shadow 0.3s",
          boxShadow: scrolled ? "0 2px 20px rgba(107,76,42,0.08)" : "none",
        }}
        role="navigation"
        aria-label="Navigazione principale"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none", flexShrink: 0 }}
          aria-label="Mr. Cartongesso — home"
        >
          <Image
            src="/images/logo.png"
            alt="Mr. Cartongesso Logo"
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
          <div>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--warm-brown)",
              textTransform: "uppercase",
              display: "block",
              lineHeight: 1.1,
            }}>
              Mr. Cartongesso
            </span>
            <span style={{
              fontSize: "0.52rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}>
              Maestri del Gesso & LED
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <ul className="desktop-only" style={{
          display: "flex", alignItems: "center", gap: "2.5rem", listStyle: "none",
        }}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontSize: "0.78rem", fontWeight: 400, color: "var(--text-muted)",
                textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase",
                transition: "color 0.25s",
              }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--warm-brown)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
              >
                {t(l.it, l.en)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right controls */}
        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Lang switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.1rem" }}>
            {(["it", "en"] as const).map((l, i) => (
              <span key={l} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <span style={{ color: "var(--text-light)", fontSize: "0.7rem", margin: "0 0.1rem" }}>/</span>}
                <button onClick={() => setLang(l)} style={{
                  background: "none", border: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem", fontWeight: 500,
                  color: lang === l ? "var(--warm-brown)" : "var(--text-light)",
                  cursor: "pointer", padding: "0.2rem 0.3rem",
                  letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s",
                }}>
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          {/* CTA */}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 500,
            color: "var(--white)", background: "var(--warm-brown)",
            padding: "0.6rem 1.4rem", textDecoration: "none",
            letterSpacing: "0.06em", textTransform: "uppercase",
            transition: "background 0.25s", display: "inline-flex", alignItems: "center", gap: "0.4rem",
          }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--charcoal)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--warm-brown)")}
          >
            <span>💬</span> {t("Contattaci", "Contact Us")}
          </a>
        </div>

        {/* Mobile right — lang + hamburger */}
        <div className="mobile-only" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Lang switcher mobile */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {(["it", "en"] as const).map((l, i) => (
              <span key={l} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <span style={{ color: "var(--text-light)", fontSize: "0.65rem", margin: "0 0.1rem" }}>/</span>}
                <button onClick={() => setLang(l)} style={{
                  background: "none", border: "none",
                  fontSize: "0.68rem", fontWeight: 500,
                  color: lang === l ? "var(--warm-brown)" : "var(--text-light)",
                  cursor: "pointer", padding: "0.2rem 0.25rem",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0.4rem", display: "flex", flexDirection: "column",
              gap: "5px", justifyContent: "center", alignItems: "center",
              width: "36px", height: "36px",
            }}
          >
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: "var(--warm-brown)",
              transition: "transform 0.3s, opacity 0.3s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: "var(--warm-brown)",
              transition: "opacity 0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: "var(--warm-brown)",
              transition: "transform 0.3s, opacity 0.3s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: "fixed", inset: 0, zIndex: 997,
            background: "rgba(42,34,24,0.4)",
            backdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* Mobile Menu Panel */}
      <div style={{
        position: "fixed",
        top: "68px", right: 0, bottom: 0,
        width: "min(320px, 85vw)",
        zIndex: 998,
        background: "var(--ivory)",
        borderLeft: "1px solid var(--border)",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        padding: "2.5rem 2rem",
        gap: "0",
        overflowY: "auto",
      }}>
        {/* Nav links */}
        <ul style={{ listStyle: "none", marginBottom: "2.5rem" }}>
          {navLinks.map((l, i) => (
            <li key={l.href} style={{
              borderBottom: "1px solid var(--border)",
            }}>
              <a
                href={l.href}
                onClick={closeMenu}
                style={{
                  display: "block",
                  padding: "1.1rem 0",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "var(--charcoal)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--warm-brown)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--charcoal)")}
              >
                {t(l.it, l.en)}
              </a>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
            background: "var(--warm-brown)", color: "var(--white)",
            textDecoration: "none", padding: "1rem",
            fontSize: "0.82rem", fontWeight: 500,
            letterSpacing: "0.08em", textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          💬 {t("Scrivici su WhatsApp", "Message on WhatsApp")}
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid var(--border-strong)", color: "var(--warm-brown)",
            textDecoration: "none", padding: "0.9rem",
            fontSize: "0.82rem", fontWeight: 500,
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}
        >
          {t("Richiedi Preventivo", "Get a Quote")}
        </a>

        {/* Bottom info */}
        <div style={{ marginTop: "auto", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            📱 <a href="tel:+393889995326" style={{ color: "var(--text-muted)", textDecoration: "none" }}>+39 388 999 5326</a>
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginTop: "0.3rem" }}>Italia</p>
        </div>
      </div>

      <style>{`
        .desktop-only { display: flex !important; }
        .mobile-only { display: none !important; }
        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
          nav { padding: 0 1.2rem !important; }
        }
      `}</style>
    </>
  );
}