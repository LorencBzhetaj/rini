"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { Project, WHATSAPP_URL } from "@/lib/data";

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ModalProps) {
  const { t } = useLang();
  const [mediaIdx, setMediaIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset index when project changes
  useEffect(() => {
    setMediaIdx(0);
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, mediaIdx]);

  // Lock body scroll
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  if (!project) return null;

  const media = project.media;
  const current = media[mediaIdx];

  function next() {
    if (videoRef.current) { videoRef.current.pause(); }
    setMediaIdx((i) => (i + 1) % media.length);
  }
  function prev() {
    if (videoRef.current) { videoRef.current.pause(); }
    setMediaIdx((i) => (i - 1 + media.length) % media.length);
  }
  function goTo(i: number) {
    if (videoRef.current) { videoRef.current.pause(); }
    setMediaIdx(i);
  }

  const waMessage = encodeURIComponent(
    `Ciao! Ho visto il progetto "${t(project.titleIT, project.titleEN)}" sul vostro sito e sono interessato a qualcosa di simile. Potete mandarmi un preventivo?`
  );

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={t(project.titleIT, project.titleEN)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(26,19,10,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          background: "var(--ivory)",
          maxWidth: "1000px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }}
        role="document"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Chiudi"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "38px",
            height: "38px",
            background: "var(--charcoal)",
            color: "var(--ivory)",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--warm-brown)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--charcoal)")}
        >
          ✕
        </button>

        {/* Media area */}
        <div
          style={{
            position: "relative",
            height: "520px",
            overflow: "hidden",
            background: "var(--charcoal)",
          }}
        >
          {current.type === "img" ? (
            <Image
              src={current.src}
              alt={current.alt || t(project.titleIT, project.titleEN)}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 1000px) 100vw, 1000px"
              priority
            />
          ) : (
            <video
              ref={videoRef}
              src={current.src}
              controls
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              aria-label={`Video del progetto ${t(project.titleIT, project.titleEN)}`}
            />
          )}

          {/* Prev / Next arrows */}
          {media.length > 1 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 1rem",
                pointerEvents: "none",
              }}
            >
              <button
                onClick={prev}
                aria-label="Media precedente"
                style={{
                  width: "42px",
                  height: "42px",
                  background: "rgba(245,239,224,0.88)",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  color: "var(--charcoal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "all",
                  transition: "background 0.2s",
                }}
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Media successivo"
                style={{
                  width: "42px",
                  height: "42px",
                  background: "rgba(245,239,224,0.88)",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  color: "var(--charcoal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "all",
                  transition: "background 0.2s",
                }}
              >
                ›
              </button>
            </div>
          )}

          {/* Media counter */}
          {media.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
                background: "rgba(42,34,24,0.7)",
                color: "var(--ivory)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                padding: "0.25rem 0.6rem",
              }}
            >
              {mediaIdx + 1} / {media.length}
            </div>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "0.5rem",
            }}
          >
            {t(project.catIT, project.catEN)}
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.8rem",
              fontWeight: 300,
              color: "var(--charcoal)",
              marginBottom: "0.8rem",
            }}
          >
            {t(project.titleIT, project.titleEN)}
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              fontWeight: 300,
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}
          >
            {t(project.descIT, project.descEN)}
          </p>

          {/* Thumbnails */}
          {media.length > 1 && (
            <div
              style={{
                display: "flex",
                gap: "0.6rem",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              {media.map((m, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Vai a media ${i + 1}`}
                  aria-current={i === mediaIdx ? "true" : undefined}
                  style={{
                    width: "72px",
                    height: "54px",
                    padding: 0,
                    border: `2px solid ${i === mediaIdx ? "var(--gold)" : "transparent"}`,
                    cursor: "pointer",
                    opacity: i === mediaIdx ? 1 : 0.55,
                    transition: "border-color 0.2s, opacity 0.2s",
                    position: "relative",
                    overflow: "hidden",
                    background: "var(--charcoal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {m.type === "img" ? (
                    <Image
                      src={m.src}
                      alt={`Anteprima ${i + 1}`}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="72px"
                    />
                  ) : (
                    <span style={{ color: "var(--ivory)", fontSize: "1.2rem" }}>▶</span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Actions */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={`${WHATSAPP_URL}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.35)",
                color: "#16A34A",
                textDecoration: "none",
                padding: "0.75rem 1.4rem",
                fontSize: "0.8rem",
                fontWeight: 500,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(37,211,102,0.22)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(37,211,102,0.12)")
              }
            >
              💬 {t("Richiedi questo stile", "Request this style")}
            </a>
            <a
              href="#contact"
              onClick={onClose}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--warm-brown)",
                color: "var(--white)",
                textDecoration: "none",
                padding: "0.75rem 1.4rem",
                fontSize: "0.8rem",
                fontWeight: 500,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--charcoal)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--warm-brown)")
              }
            >
              {t("Richiedi Preventivo →", "Get a Quote →")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}