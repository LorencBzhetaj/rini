"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { WHATSAPP_URL } from "@/lib/data";

export default function Hero() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.play().catch(() => {});

    const timer = setTimeout(() => {
      if (v.paused) v.play().catch(() => {});
    }, 300);

    const onVisible = () => {
      if (document.visibilityState === "visible" && v.paused) {
        v.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ── VIDEO BACKGROUND ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          // scale hequr — shkaktonte crop në mobile
        }}
      >
        {/* Fallback image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: videoLoaded ? 0 : 1,
            transition: "opacity 1.2s ease",
          }}
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          onLoadedData={() => setVideoLoaded(true)}
          onLoadedMetadata={() => {
            setVideoLoaded(true);
            videoRef.current?.play().catch(() => {});
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
      </div>

      {/* ── GRADIENT OVERLAYS ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(42,34,24,0.2) 0%, rgba(42,34,24,0.45) 40%, rgba(42,34,24,0.75) 80%, rgba(42,34,24,0.88) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(42,34,24,0.5) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          zIndex: 3,
          background:
            "linear-gradient(to right, transparent 0%, rgba(200,165,88,0.6) 50%, transparent 100%)",
        }}
      />

      {/* ── CONTENT ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "0.6rem",
            fontWeight: 500,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(200,165,88,0.9)",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              background: "rgba(200,165,88,0.7)",
            }}
          />
          {t("Maestri del Gesso & LED", "Drywall & LED Masters")}
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              background: "rgba(200,165,88,0.7)",
            }}
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#FDFAF5",
            marginBottom: "1.5rem",
          }}
        >
          {t("Controsoffitti di lusso", "Luxury drywall")}
          <br />
          <em
            style={{
              fontStyle: "italic",
              color: "#C8A558",
              fontWeight: 300,
            }}
          >
            {t("& illuminazione LED.","& LED design.")}
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(253,250,245,0.72)",
            maxWidth: "480px",
            marginBottom: "3rem",
            letterSpacing: "0.01em",
          }}
        >
          {t(
            "Interni moderni realizzati con precisione ed eleganza.",
            "Modern interiors crafted with precision and elegance."
          )}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-ctas"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.95rem 2.2rem",
              background: "rgba(200,165,88,0.92)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(200,165,88,0.6)",
              borderRadius: "100px",
              color: "#2A2218",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            💬 {t("Richiedi Preventivo", "Request a Quote")}
          </a>

          <a
            href="#work"
            className="hero-btn-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.95rem 2.2rem",
              background: "rgba(253,250,245,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(253,250,245,0.28)",
              borderRadius: "100px",
              color: "rgba(253,250,245,0.9)",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            {t("Vedi Progetti", "View Projects")} →
          </a>
        </motion.div>

        
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span
          style={{
            fontSize: "0.55rem",
            fontWeight: 500,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(253,250,245,0.35)",
          }}
        >
          {t("Scorri", "Scroll")}
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(200,165,88,0.6), transparent)",
            animation: "scrollLine 1.8s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* ── STYLES ── */}
     <style>{`
  .hero-btn-primary:hover {
    background: rgba(253,250,245,0.95) !important;
    border-color: rgba(253,250,245,0.8) !important;
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(200,165,88,0.3);
  }
  .hero-btn-secondary:hover {
    background: rgba(253,250,245,0.14) !important;
    border-color: rgba(253,250,245,0.55) !important;
    transform: translateY(-2px);
  }
  @keyframes scrollLine {
    0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
    50%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
    100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
  }

  @media (max-width: 600px) {
    #home {
      height: 100dvh !important;
    }
    #home video {
      object-position: center center;
      height: 100dvh !important;
    }
    .hero-ctas {
      flex-direction: column !important;
      gap: 0.75rem !important;
    }
    .hero-ctas a {
      width: 100%;
      max-width: 280px;
      justify-content: center;
      padding: 0.75rem 1.5rem !important;
      font-size: 0.68rem !important;
    }
  }
`}</style>
    </section>
  );
}