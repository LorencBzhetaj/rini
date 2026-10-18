"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { services } from "@/lib/data";

const paths = ["controsoffitti-led", "pareti-attrezzate", "frame-led-geometrici", "cartongesso-residenziale", "illuminazione-lineare"];
export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="section services-section">
      <div className="section-heading"><div><p className="eyebrow">02 / {t("Cosa realizziamo", "What we create")}</p><h2>{t("Soluzioni per i tuoi", "Solutions for your")} <em>{t("spazi.", "space.")}</em></h2></div><p>{t("Dai controsoffitti alle pareti attrezzate: cartongesso e LED per interni a Busca, Cuneo e in Piemonte.", "From ceilings to feature walls: drywall and LED lighting for interiors in Busca, Cuneo and Piemonte.")}</p></div>
      <div className="service-list">{services.map((service, index) => (
        <article className="service-row" key={paths[index]}>
          <span className="service-number">0{index + 1}</span>
          <div className="service-copy"><h3><Link href={`/${paths[index]}`}>{t(service.titleIT, service.titleEN)} <span aria-hidden="true">↗</span></Link></h3><p>{t(service.descIT, service.descEN)}</p><ul>{service.items.map(item => <li key={item.it}>{t(item.it, item.en)}</li>)}</ul></div>
          <Link className="service-image" href={`/${paths[index]}`} tabIndex={-1} aria-hidden="true"><Image src={service.image} alt="" fill sizes="(max-width: 600px) 40vw, 240px" /></Link>
        </article>
      ))}</div>
    </section>
  );
}
