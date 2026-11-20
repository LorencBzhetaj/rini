"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useLang } from "@/lib/LangContext";
import Link from "next/link";

type GuideImage = { src: string; altIT: string; altEN: string };
type GuideLink = { href: string; it: string; en: string };

export default function DrywallGuide({ title, intro, sections, images = [], related = [] }: {
  title: [string, string];
  intro: [string, string];
  sections: [string, string, string, string][];
  images?: GuideImage[];
  related?: GuideLink[];
}) {
  const { t } = useLang();
  return <>
    <Navbar />
    <main id="main-content">
      <section className="section" style={{ paddingTop: "9rem" }}>
        <p className="eyebrow">M.B Cartongesso · Busca e Cuneo</p>
        <h1 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1, margin: "1rem 0" }}>{t(...title)}</h1>
        <p style={{ maxWidth: "68ch" }}>{t(...intro)}</p>
        {sections.map(([it, en, bodyIT, bodyEN]) => <div key={it} style={{ maxWidth: "68ch", marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: ".5rem" }}>{t(it, en)}</h2>
          <p>{t(bodyIT, bodyEN)}</p>
        </div>)}
        {images.length > 0 && <div style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1.2rem" }}>{t("Alcuni nostri lavori", "Some of our work")}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "1.5rem" }}>
            {images.map((img) => <figure key={img.src} style={{ margin: 0 }}>
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--charcoal)" }}>
                <Image src={img.src} alt={t(img.altIT, img.altEN)} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 400px" />
              </div>
              <figcaption style={{ fontSize: ".85rem", color: "var(--text-muted)", marginTop: ".6rem" }}>{t(img.altIT, img.altEN)}</figcaption>
            </figure>)}
          </div>
        </div>}
        {related.length > 0 && <nav aria-label={t("Servizi correlati", "Related services")} style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: ".8rem" }}>{t("Servizi correlati", "Related services")}</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "0 1.5rem" }}>
            {related.map((r) => <li key={r.href} style={{ listStyle: "none" }}><Link className="text-link" href={r.href}>{t(r.it, r.en)} →</Link></li>)}
          </ul>
        </nav>}
        <p style={{ marginTop: "2rem" }}><Link className="text-link" href="/#services">{t("Scopri tutti i servizi in cartongesso", "Explore all drywall services")} →</Link></p>
      </section>
      <Contact />
    </main>
    <Footer />
  </>;
}
