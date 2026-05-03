"use client";
import { useLang } from "@/lib/LangContext";

const items = [
  { it: "Controsoffitti LED", en: "LED Drop Ceilings" },
  { it: "Pareti in Cartongesso", en: "Drywall Partitions" },
  { it: "Illuminazione Lineare", en: "Linear Lighting" },
  { it: "Residenziale", en: "Residential" },
  { it: "Frame LED Geometrici", en: "Geometric LED Frames" },
  { it: "Design Su Misura", en: "Custom Design" },
  { it: "Preventivo Gratuito", en: "Free Quote" },
  { it: "Pareti Attrezzate", en: "Feature Walls" },
];

export default function Ticker() {
  const { t } = useLang();
  const doubled = [...items, ...items];

  return (
    <div
      style={{ background: "var(--warm-brown)", overflow: "hidden", padding: "0.85rem 0" }}
      aria-hidden="true"
    >
      <div style={{
        display: "flex", gap: "2.5rem", width: "max-content",
        animation: "ticker 40s linear infinite",
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontSize: "0.65rem", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(253,250,245,0.75)", whiteSpace: "nowrap",
            display: "flex", alignItems: "center", gap: "1.5rem",
          }}>
            {t(item.it, item.en)}
            <span style={{ color: "var(--gold)", fontSize: "0.45rem" }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}