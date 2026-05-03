"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { projects, Project } from "@/lib/data";
import ProjectModal from "./ProjectModal";
import FadeIn from "./FadeIn";

const TOTAL = projects.length;

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (TOTAL - 1 - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      style={{ height: "90vh", display: "flex", alignItems: "flex-start", justifyContent: "center" }}
    >
      <motion.div
        style={{
          scale,
          position: "sticky",
          top: `${80 + index * 24}px`,
          width: "100%",
          maxWidth: "1100px",
          borderRadius: "24px",
          border: "1px solid var(--border-strong)",
          background: "var(--white)",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(107,76,42,0.10)",
          transformOrigin: "top center",
        }}
      >
        {/* Card header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.5rem 2rem",
          borderBottom: "1px solid var(--border)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300, color: "var(--text-light)",
              lineHeight: 1,
            }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <div style={{
                fontSize: "0.62rem", fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--gold)", marginBottom: "0.2rem",
              }}>
                {t(project.catIT, project.catEN)}
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                fontWeight: 400, color: "var(--charcoal)",
              }}>
                {t(project.titleIT, project.titleEN)}
              </div>
            </div>
          </div>

          {/* View button */}
          <button
            onClick={onClick}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem", fontWeight: 500,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--warm-brown)",
              border: "1px solid var(--border-strong)",
              background: "transparent",
              padding: "0.6rem 1.4rem",
              borderRadius: "100px",
              cursor: "pointer",
              transition: "all 0.25s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--warm-brown)";
              (e.currentTarget as HTMLElement).style.color = "var(--white)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--warm-brown)";
            }}
          >
            {t("Vedi Progetto →", "View Project →")}
          </button>
        </div>

        {/* Card images */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "0" }}>
          {/* Left column — 2 stacked images */}
          <div style={{ display: "flex", flexDirection: "column", borderRight: "1px solid var(--border)" }}>
            {project.media.filter(m => m.type === "img").slice(0, 2).map((m, i) => (
              <div key={i} style={{
                position: "relative",
                height: i === 0 ? "clamp(130px, 16vw, 220px)" : "clamp(160px, 20vw, 280px)",
                borderBottom: i === 0 ? "1px solid var(--border)" : "none",
                overflow: "hidden",
              }}>
                <Image
                  src={m.src} alt={m.alt || ""}
                  fill style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 40vw, 400px"
                />
              </div>
            ))}
            {/* If only 1 image, fill second slot with cover */}
            {project.media.filter(m => m.type === "img").length < 2 && (
              <div style={{
                position: "relative",
                height: "clamp(160px, 20vw, 280px)",
                overflow: "hidden",
                opacity: 0.5,
              }}>
                <Image
                  src={project.coverImage} alt=""
                  fill style={{ objectFit: "cover", filter: "blur(2px)" }}
                  sizes="400px"
                />
              </div>
            )}
          </div>

          {/* Right column — 1 tall image */}
          <div style={{
            position: "relative",
            height: "clamp(290px, 36vw, 500px)",
            overflow: "hidden",
          }}>
            <Image
              src={project.coverImage} alt={t(project.titleIT, project.titleEN)}
              fill style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 60vw, 660px"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Work() {
  const { t } = useLang();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="work"
      style={{
        background: "var(--ivory-dark)",
        padding: "6rem 3rem 4rem",
        borderRadius: "24px 24px 0 0",
        marginTop: "-24px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Header */}
      <FadeIn y={40} style={{ marginBottom: "4rem" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "0.7rem",
          fontSize: "0.65rem", fontWeight: 500,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--gold)", marginBottom: "1.2rem",
        }}>
          <span style={{ display: "block", width: "24px", height: "1px", background: "var(--gold)" }} />
          {t("Progetti Selezionati", "Selected Projects")}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
            fontWeight: 300, lineHeight: 1.12,
          }}>
            {t("I Nostri ", "Our ")}
            <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>{t("Lavori", "Work")}</em>
          </h2>
          <p style={{
            fontSize: "0.83rem", color: "var(--text-muted)", fontWeight: 300,
            maxWidth: "280px", lineHeight: 1.8, textAlign: "right",
          }}>
            {t("Clicca su ogni progetto per vedere tutte le foto e i video.", "Click on each project to see all photos and videos.")}
          </p>
        </div>
      </FadeIn>

      {/* Stacking cards */}
      <div>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      <style>{`
        @media (max-width: 900px) {
          #work { padding: 4rem 1.25rem 2rem !important; border-radius: 16px 16px 0 0 !important; }
        }
      `}</style>
    </section>
  );
}