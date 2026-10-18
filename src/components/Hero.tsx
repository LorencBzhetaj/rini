"use client";
import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/lib/LangContext";

export default function Hero() {
  const { t } = useLang();
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Busca · Cuneo · Piemonte</p>
        <h1>{t("Lo spazio prende", "Give your space")}<br /><em>{t("una nuova luce.", "a new light.")}</em></h1>
        <p className="hero-description">{t("Cartongesso e illuminazione LED su misura. Controsoffitti, pareti attrezzate e dettagli che danno forma ai tuoi interni.", "Custom drywall and LED lighting. Ceilings, feature walls and details that shape your interiors.")}</p>
        <div className="hero-actions">
          <a className="button" href="#work">{t("Esplora i lavori", "Explore our work")} <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#contact">{t("Parliamo del tuo progetto", "Tell us about your project")} <span aria-hidden="true">→</span></a>
        </div>
        <p className="hero-note">{t("Dall’idea alla finitura, con cura per ogni dettaglio.", "From the first idea to the finish, with care in every detail.")}</p>
      </div>
      <figure className="hero-figure">
        <div className="hero-photo"><Image src="/images/hero-bg.jpg" alt={t("Controsoffitto con luce perimetrale e profili LED incrociati", "Ceiling with perimeter lighting and intersecting LED profiles")} fill preload sizes="(max-width: 760px) 100vw, 55vw" />
          {showVideo && <video className="hero-video" src="/videos/hero.mp4" controls playsInline autoPlay onError={() => setShowVideo(false)} aria-label={t("Video delle lavorazioni in cartongesso", "Video of drywall work")} />}
          <button className="hero-video-toggle" aria-pressed={showVideo} onClick={() => setShowVideo(value => !value)}>{showVideo ? t("Chiudi video", "Close video") : t("Guarda il video", "Watch the video")} {showVideo ? "✕" : "▷"}</button>
        </div>
        <figcaption><span>{t("Cartongesso. Luce. Architettura.", "Drywall. Light. Architecture.")}</span><span>01 / M.B</span></figcaption>
      </figure>
    </section>
  );
}
