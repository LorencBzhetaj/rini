"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useLang } from "@/lib/LangContext";
import Link from "next/link";

export default function DrywallGuide({ title, intro, sections }: { title: [string, string]; intro: [string, string]; sections: [string, string, string, string][] }) {
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
        <p style={{ marginTop: "2rem" }}><Link className="text-link" href="/#services">{t("Scopri tutti i servizi in cartongesso", "Explore all drywall services")} →</Link></p>
      </section>
      <Contact />
    </main>
    <Footer />
  </>;
}
