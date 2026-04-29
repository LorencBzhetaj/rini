"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { services, projects, Project } from "@/lib/data";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

// Build a merged "service gallery" project from multiple project IDs
function buildServiceProject(
  svc: typeof services[0],
  projectIds: number[],
  lang: "it" | "en"
): Project {
  const relatedProjects = projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean) as Project[];

  // Merge all media from related projects into one
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
    <section id="services" style={{ padding: "6rem 3rem", background: "var(--charcoal)" }}>
      {/* Header */}
      <div style={{ maxWidth: "640px", marginBottom: "4rem" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "0.7rem",
          fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem",
        }}>
          <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold)" }} />
          {t("Cosa Facciamo", "What We Do")}
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 4vw, 3.4rem)",
          fontWeight: 300, lineHeight: 1.12, color: "var(--ivory)", marginBottom: "1rem",
        }}>
          {t("I Nostri ", "Our ")}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>{t("Servizi", "Services")}</em>
        </h2>
        <p style={{ fontSize: "0.93rem", fontWeight: 300, lineHeight: 1.9, color: "var(--text-light)" }}>
          {t(
            "Dall'idea al risultato finale: ogni lavoro è realizzato con cura artigianale, materiali premium e sistemi LED di ultima generazione.",
            "From concept to final result: every project is crafted with artisan care, premium materials, and next-generation LED systems."
          )}
        </p>
      </div>

      {/* Grid */}
      <div className="services-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1px",
        background: "rgba(255,255,255,0.06)",
      }}>
        {services.map((svc, i) => {
          const hasGallery = svc.galleryProjectIds.length > 0;
          const totalMedia = svc.galleryProjectIds
            .map((id) => projects.find((p) => p.id === id))
            .filter(Boolean)
            .flatMap((p) => p!.media).length;

          return (
            <article
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? "var(--charcoal-mid)" : "var(--charcoal)",
                transition: "background 0.3s",
                overflow: "hidden",
              }}
            >
              {/* Clickable image */}
              <div
                onClick={() => hasGallery && handleImageClick(svc)}
                style={{
                  position: "relative",
                  height: "200px",
                  overflow: "hidden",
                  cursor: hasGallery ? "pointer" : "default",
                }}
                role={hasGallery ? "button" : undefined}
                tabIndex={hasGallery ? 0 : undefined}
                aria-label={hasGallery ? t(`Vedi galleria: ${svc.titleIT}`, `View gallery: ${svc.titleEN}`) : undefined}
                onKeyDown={(e) => {
                  if (hasGallery && (e.key === "Enter" || e.key === " ")) handleImageClick(svc);
                }}
              >
                <Image
                  src={svc.image}
                  alt={svc.imageAlt}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s ease, filter 0.4s",
                    transform: hovered === i ? "scale(1.06)" : "scale(1)",
                    filter: hovered === i ? "brightness(0.55)" : "brightness(0.45)",
                  }}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />

                {/* Gold accent bar */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0,
                  width: hovered === i ? "100%" : "0",
                  height: "2px", background: "var(--gold)",
                  transition: "width 0.4s ease",
                }} />

                {/* "View Gallery" overlay on hover */}
                {hasGallery && (
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: "0.4rem",
                    opacity: hovered === i ? 1 : 0,
                    transition: "opacity 0.3s",
                    background: "rgba(42,34,24,0.25)",
                  }}>
                    <div style={{
                      background: "var(--ivory)", color: "var(--warm-brown)",
                      fontSize: "0.7rem", fontWeight: 500,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "0.45rem 1.1rem",
                      transform: hovered === i ? "translateY(0)" : "translateY(6px)",
                      transition: "transform 0.3s ease",
                    }}>
                      {t("Vedi Galleria", "View Gallery")}
                    </div>
                    {/* Media count badge */}
                    <div style={{
                      fontSize: "0.62rem", color: "rgba(253,250,245,0.8)",
                      letterSpacing: "0.08em",
                    }}>
                      📷 {totalMedia} {t("foto/video", "photos/videos")}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "1.75rem 1.75rem 2rem" }}>
                <span style={{ fontSize: "1.3rem", marginBottom: "0.85rem", display: "block", color: "var(--gold)" }}>
                  {svc.icon}
                </span>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.25rem", fontWeight: 400,
                  color: "var(--ivory)", marginBottom: "0.75rem", lineHeight: 1.3,
                }}>
                  {t(svc.titleIT, svc.titleEN)}
                </h3>
                <p style={{
                  fontSize: "0.83rem", fontWeight: 300,
                  lineHeight: 1.85, color: "var(--text-light)", marginBottom: "1rem",
                }}>
                  {t(svc.descIT, svc.descEN)}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {svc.items.map((item, j) => (
                    <li key={j} style={{ fontSize: "0.76rem", color: "var(--gold)", letterSpacing: "0.03em" }}>
                      <span style={{ opacity: 0.5 }}>— </span>{t(item.it, item.en)}
                    </li>
                  ))}
                </ul>

                {/* Gallery link at bottom */}
                {hasGallery && (
                  <button
                    onClick={() => handleImageClick(svc)}
                    style={{
                      marginTop: "1.25rem",
                      background: "none", border: "none",
                      cursor: "pointer", padding: 0,
                      display: "flex", alignItems: "center", gap: "0.4rem",
                      fontSize: "0.75rem", color: "var(--gold)",
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      transition: "opacity 0.2s",
                      opacity: 0.75,
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                  >
                    {t("Vedi lavori correlati →", "View related work →")}
                  </button>
                )}
              </div>
            </article>
          );
        })}
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