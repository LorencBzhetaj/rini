"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setOpacity(0), 1400);
    const doneTimer = setTimeout(() => setDone(true), 1900);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  if (done) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#2A2218",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "2rem",
      opacity, transition: "opacity 0.5s ease",
      pointerEvents: done ? "none" : "all",
    }}>
      {/* Logo / Icon */}
      <div style={{
        animation: "fadeInUp 0.6s ease 0.2s both",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "1rem",
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2.5rem", color: "#C8A558",
        }}>✦</div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.2rem", fontWeight: 400,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: "#F5EFE0",
        }}>
          M.B Cartongesso
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        width: "140px", height: "1px",
        background: "rgba(200,165,88,0.2)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0, height: "100%",
          background: "#C8A558",
          animation: "loadProgress 1.4s ease forwards",
        }} />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loadProgress {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}