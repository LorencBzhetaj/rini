"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { stats } from "@/lib/data";

export default function WhyUs() {
  const { t } = useLang();
  const points = [
    ["Design su misura", "Custom design", "Forme e proporzioni pensate per il tuo ambiente, dalle pareti ai soffitti.", "Shapes and proportions designed for your room, from walls to ceilings."],
    ["Luce integrata", "Integrated light", "Profili lineari, luce indiretta e cornici luminose si integrano nel cartongesso.", "Linear profiles, indirect light and illuminated frames integrated into drywall."],
    ["Un confronto diretto", "A direct conversation", "Un preventivo gratuito e dettagliato per definire insieme il lavoro da realizzare.", "A free, detailed quote to define the work together."],
  ];
  return <section id="why" className="section about-section"><div className="about-photo"><Image src="/images/why-bg.jpg" alt={t("Interno con lavorazioni in cartongesso e illuminazione LED", "Interior with drywall finishes and LED lighting")} fill sizes="(max-width: 760px) 100vw, 45vw" /></div><div className="about-copy"><p className="eyebrow">03 / M.B Cartongesso</p><h2>{t("Il dettaglio fa", "The detail makes")}<br /><em>{t("la differenza.", "the difference.")}</em></h2><p>{t("Da oltre 10 anni realizziamo controsoffitti, pareti e soluzioni LED per abitazioni e spazi commerciali a Busca, Cuneo, Saluzzo, Fossano, Savigliano e in tutta la provincia di Cuneo.", "For over 10 years we have been creating ceilings, walls and LED solutions for homes and commercial spaces in Busca, Cuneo, Saluzzo, Fossano, Savigliano and across the province of Cuneo.")}</p><dl className="about-stats" style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem 2.5rem", margin: "1.8rem 0 0.5rem" }}>{stats.slice(0, 2).map((s) => <div key={s.num}><dt style={{ fontFamily: "var(--font-display), serif", fontSize: "2.4rem", lineHeight: 1, color: "var(--warm-brown)" }}>{s.num}</dt><dd style={{ margin: ".35rem 0 0", fontSize: ".8rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{t(s.labelIT, s.labelEN)}</dd></div>)}</dl><div className="about-points">{points.map(([it,en,descIT,descEN],i) => <div key={it}><span>0{i+1}</span><div><h3>{t(it,en)}</h3><p>{t(descIT,descEN)}</p></div></div>)}</div></div></section>;
}
