"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";

export default function WhyUs() {
  const { t } = useLang();
  const points = [
    ["Design su misura", "Custom design", "Forme e proporzioni pensate per il tuo ambiente, dalle pareti ai soffitti.", "Shapes and proportions designed for your room, from walls to ceilings."],
    ["Luce integrata", "Integrated light", "Profili lineari, luce indiretta e cornici luminose si integrano nel cartongesso.", "Linear profiles, indirect light and illuminated frames integrated into drywall."],
    ["Un confronto diretto", "A direct conversation", "Un preventivo gratuito e dettagliato per definire insieme il lavoro da realizzare.", "A free, detailed quote to define the work together."],
  ];
  return <section id="why" className="section about-section"><div className="about-photo"><Image src="/images/why-bg.jpg" alt={t("Interno con lavorazioni in cartongesso e illuminazione LED", "Interior with drywall finishes and LED lighting")} fill sizes="(max-width: 760px) 100vw, 45vw" /></div><div className="about-copy"><p className="eyebrow">03 / M.B Cartongesso</p><h2>{t("Il dettaglio fa", "The detail makes")}<br /><em>{t("la differenza.", "the difference.")}</em></h2><p>{t("Realizziamo controsoffitti, pareti e soluzioni LED per ambienti residenziali e commerciali a Busca, Cuneo e in Piemonte.", "We create ceilings, walls and LED solutions for residential and commercial interiors in Busca, Cuneo and Piemonte.")}</p><div className="about-points">{points.map(([it,en,descIT,descEN],i) => <div key={it}><span>0{i+1}</span><div><h3>{t(it,en)}</h3><p>{t(descIT,descEN)}</p></div></div>)}</div></div></section>;
}
