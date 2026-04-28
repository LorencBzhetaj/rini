"use client";
import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import { projects, Project } from "@/lib/data";
import ProjectModal from "./ProjectModal";

export default function Work() {
  const { t } = useLang();
  const [selected, setSelected] = useState<Project | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="work"
      style={{
        padding: "8rem 3rem",
        background: "var(--white)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3.5rem",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
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
            {t("Progetti Selezionati", "Selected Projects")}
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.12,
            }}
          >
            {t("I Nostri ", "Our ")}
            <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>
              {t("Lavori", "Work")}
            </em>
          </h2>
        </div>
        <p
          style={{
            fontSize: "0.83rem",
            color: "var(--text-muted)",
            fontWeight: 300,
            maxWidth: "300px",
            lineHeight: 1.8,
            textAlign: "right",
          }}
        >
          {t(
            "Clicca su ogni progetto per vedere tutte le foto e i video del lavoro.",
            "Click on each project to see all photos and videos of the work."
          )}
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, i) => (
          <article
            key={project.id}
            onClick={() => setSelected(project)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              cursor: "pointer",
              background: "var(--ivory-dark)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
              boxShadow:
                hovered === i
                  ? "0 20px 50px rgba(107,76,42,0.12)"
                  : "0 0 0 transparent",
            }}
            role="button"
            tabIndex={0}
            aria-label={`Vedi progetto: ${t(project.titleIT, project.titleEN)}`}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelected(project); }}
          >
            {/* Image */}
            <div
              style={{
                aspectRatio: "4/3",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={project.coverImage}
                alt={t(project.titleIT, project.titleEN)}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s ease, filter 0.4s",
                  transform: hovered === i ? "scale(1.06)" : "scale(1)",
                  filter: hovered === i ? "brightness(0.7)" : "brightness(0.95)",
                }}
                sizes="(max-width: 900px) 100vw, 33vw"
              />

              {/* Overlay CTA */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: hovered === i ? 1 : 0,
                  transition: "opacity 0.35s",
                  background: "rgba(42,34,24,0.2)",
                }}
              >
                <div
                  style={{
                    background: "var(--ivory)",
                    color: "var(--warm-brown)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.55rem 1.3rem",
                    transform: hovered === i ? "translateY(0)" : "translateY(8px)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {t("Vedi Progetto", "View Project")}
                </div>
              </div>

              {/* Media count badge */}
              {project.media.length > 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "0.75rem",
                    right: "0.75rem",
                    background: "rgba(42,34,24,0.75)",
                    color: "var(--ivory)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    padding: "0.2rem 0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <span>📷</span>
                  {project.media.filter((m) => m.type === "img").length}
                  {project.media.some((m) => m.type === "video") && (
                    <span style={{ marginLeft: "0.3rem" }}>
                      🎬 {project.media.filter((m) => m.type === "video").length}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Content */}
            <div style={{ padding: "1.4rem 1.5rem 1.7rem" }}>
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.4rem",
                }}
              >
                {t(project.catIT, project.catEN)}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  marginBottom: "0.45rem",
                }}
              >
                {t(project.titleIT, project.titleEN)}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                {t(project.descIT, project.descEN).slice(0, 110)}…
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      <style>{`
        @media (max-width: 900px) {
          #work { padding: 5rem 1.5rem !important; }
          #work > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1200px) and (min-width: 901px) {
          #work > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
