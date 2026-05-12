"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { services, projects, Project } from "@/lib/data";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function buildServiceProject(
  svc: typeof services[0],
  projectIds: number[],
  lang: "it" | "en"
): Project {
  const relatedProjects = projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean) as Project[];
  const allMedia = relatedProjects.flatMap((p) => p.media);
  return {
    id: 0,
    slug: "service-gallery",
    catIT: "Galleria Lavori",
    catEN: "Work Gallery",
    titleIT: svc.titleIT,
    titleEN: svc.titleEN,
    descIT: svc.descIT,
    descEN: svc.descEN,
    coverImage: svc.image,
    media: allMedia.length > 0
      ? allMedia
      : [{ type: "img", src: svc.image, alt: svc.imageAlt }],
  };
}

export default function Services() {
  const { lang, t } = useLang();
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleImageClick = (svc: typeof services[0]) => {
    const project = buildServiceProject(svc, svc.galleryProjectIds, lang);
    setSelectedProject(project);
  };

  return (
    <section
      id="services"
      style={{
        padding: "7rem 3rem",
        background: "var(--ivory)",
      }}
    >
      {/* ── Header ── */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          fontSize: "0.62rem",
          fontWeight: 500,
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "1.5rem",
        }}>
          <span style={{ display: "block", width: "36px", height: "1px", background: "var(--gold)" }} />
          {t("I Nostri Servizi", "Our Services")}
          <span style={{ display: "block", width: "36px", height: "1px", background: "var(--gold)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
          fontWeight: 300,
          lineHeight: 1.12,
          color: "var(--charcoal)",
          marginBottom: "1.25rem",
          letterSpacing: "-0.01em",
        }}>
          {t("Soluzioni ", "Solutions ")}<em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            {t("su misura", "tailor-made")}
          </em>{t(" per ogni esigenza.", " for every need.")}
        </h2>

        <p style={{
          fontSize: "0.95rem",
          fontWeight: 300,
          lineHeight: 1.85,
          color: "var(--text-muted)",
          maxWidth: "520px",
          margin: "0 auto",
        }}>
          {t(
            "Design, materiali di qualità e tecnologia LED si uniscono per creare ambienti unici, eleganti e funzionali.",
            "Design, quality materials and LED technology combine to create unique, elegant and functional environments."
          )}
        </p>
      </div>

      {/* ── Cards Grid ── */}
      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.75rem",
          maxWidth: "1300px",
          margin: "0 auto 3.5rem",
        }}
      >
        {services.slice(0, 3).map((svc, i) => {
          const hasGallery = svc.galleryProjectIds.length > 0;
          return (
            <article
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#FDFAF5",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: hovered === i
                  ? "0 24px 60px rgba(107,76,42,0.13)"
                  : "0 4px 20px rgba(107,76,42,0.06)",
                transition: "box-shadow 0.35s ease, transform 0.35s ease",
                transform: hovered === i ? "translateY(-6px)" : "translateY(0)",
                position: "relative",
              }}
            >
              {/* Image */}
              <div
                onClick={() => hasGallery && handleImageClick(svc)}
                style={{
                  position: "relative",
                  height: "260px",
                  overflow: "hidden",
                  borderRadius: "16px 16px 0 0",
                  cursor: hasGallery ? "pointer" : "default",
                }}
              >
                <Image
                  src={svc.image}
                  alt={svc.imageAlt}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    transform: hovered === i ? "scale(1.05)" : "scale(1)",
                  }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />

                {/* Dark overlay on hover */}
                {hasGallery && (
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(42,34,24,0.35)",
                    opacity: hovered === i ? 1 : 0,
                    transition: "opacity 0.35s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <div style={{
                      background: "var(--ivory)",
                      color: "var(--warm-brown)",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.55rem 1.3rem",
                      borderRadius: "4px",
                      transform: hovered === i ? "translateY(0)" : "translateY(8px)",
                      transition: "transform 0.3s ease",
                    }}>
                      {t("Vedi Galleria", "View Gallery")}
                    </div>
                  </div>
                )}
              </div>

              {/* Circle icon badge — overlaps image/content border */}
              <div style={{
                position: "absolute",
                top: "236px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--ivory)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                color: "var(--gold)",
                zIndex: 2,
                boxShadow: "0 2px 12px rgba(107,76,42,0.1)",
              }}>
                {svc.icon}
              </div>

              {/* Content */}
              <div style={{ padding: "2.25rem 1.75rem 2rem" }}>
                {/* Number */}
                <div style={{
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  color: "var(--gold)",
                  marginBottom: "0.6rem",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.55rem",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  marginBottom: "0.6rem",
                  lineHeight: 1.2,
                }}>
                  {t(svc.titleIT, svc.titleEN)}
                </h3>

                {/* Gold underline */}
                <div style={{
                  width: "32px",
                  height: "1.5px",
                  background: "var(--gold)",
                  marginBottom: "1rem",
                  transition: "width 0.3s ease",
                  ...(hovered === i ? { width: "56px" } : {}),
                }} />

                {/* Description */}
                <p style={{
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}>
                  {t(svc.descIT, svc.descEN)}
                </p>

                {/* Link */}
                <button
                  onClick={() => hasGallery && handleImageClick(svc)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: hasGallery ? "pointer" : "default",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "gap 0.25s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "0.7rem")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "0.4rem")}
                >
                  {t("Scopri di Più", "Learn More")} →
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Bottom CTA Bar ── */}
      <div style={{
        maxWidth: "1300px",
        margin: "0 auto",
        background: "var(--ivory-dark)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "1.75rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          {/* Icon circle */}
          <div style={{
            width: "52px", height: "52px",
            borderRadius: "50%",
            border: "1px solid var(--border-strong)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--gold)", fontSize: "1.1rem",
            flexShrink: 0,
          }}>
            ✏
          </div>
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.25rem",
              fontWeight: 400,
              color: "var(--charcoal)",
              marginBottom: "0.2rem",
            }}>
              {t("Hai un progetto in mente?", "Have a project in mind?")}
            </div>
            <div style={{
              fontSize: "0.82rem",
              fontWeight: 300,
              color: "var(--text-muted)",
            }}>
              {t(
                "Parliamone insieme e realizziamo la soluzione perfetta per i tuoi spazi.",
                "Let's talk and create the perfect solution for your spaces."
              )}
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/393889995326"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--warm-brown)",
            color: "var(--white)",
            padding: "0.95rem 2rem",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            transition: "background 0.3s",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--charcoal)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--warm-brown)")}
        >
          {t("Richiedi un Preventivo", "Request a Quote")} →
        </a>
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        @media (max-width: 600px) {
          #services { padding: 4rem 1.25rem !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 1000px) {
          #services { padding: 5rem 1.5rem !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}