"use client";
import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      badge="Pareti Attrezzate"
      badgeEN="Feature Walls"
      titleIT="Pareti Attrezzate in Cartongesso"
      titleEN="Plasterboard Feature Walls"
      titleLine2IT="con Illuminazione LED."
      titleLine2EN="with LED Lighting."
      subtitleIT="Pareti TV, librerie e pannelli decorativi in cartongesso con illuminazione LED integrata. Materiali pregiati, finiture impeccabili e design su misura per ogni ambiente a Busca, Cuneo e Piemonte."
      subtitleEN="TV walls, bookcases and decorative panels in plasterboard with integrated LED lighting. Premium materials, impeccable finishes and bespoke design for every space in Busca, Cuneo and Piemonte."
      descriptionIT="Le nostre pareti attrezzate in cartongesso combinano funzionalità e design per trasformare qualsiasi parete in un elemento architettonico di grande impatto. Dalla parete TV con retroilluminazione LED ai pannelli rivestiti in legno con luce integrata, ogni progetto è realizzato su misura con materiali di alta qualità."
      descriptionEN="Our plasterboard feature walls combine functionality and design to transform any wall into a high-impact architectural element. From LED backlit TV walls to wood-clad panels with integrated lighting, every project is crafted to measure with premium materials."
      benefitsIT={["Pareti TV con retroilluminazione LED indiretta perimetrale","Pannelli in legno, tessuto o laccato con LED integrato","Nicchie, mensole e librerie su misura in cartongesso","Illuminazione dimmerabile e personalizzabile per ogni ora","Finiture a stucco, verniciatura e rivestimento premium","Progettazione 3D inclusa per visualizzare il risultato"]}
      benefitsEN={["TV walls with perimeter LED backlighting","Wood, fabric or lacquered panels with integrated LED","Custom niches, shelves and bookcases in plasterboard","Dimmable and customisable lighting for every moment","Stucco, paint and premium cladding finishes","3D design included to visualise the result"]}
      heroImage="/uploads/fotocover_image.png"
      heroImageAlt="Parete attrezzata in cartongesso con LED — M.B Cartongesso Busca"
      galleryImages={[
        { src: "/uploads/fotocover_image.png", alt: "Parete attrezzata con LED — M.B Cartongesso" },
        { src: "/uploads/paretti1.png", alt: "Parete TV in cartongesso con retroilluminazione LED" },
        { src: "/uploads/parete2.png", alt: "Libreria in cartongesso con nicchie illuminate" },
        { src: "/uploads/parete3.png", alt: "Pannello decorativo con LED integrato Busca" },
        { src: "/uploads/parete4.png", alt: "Parete attrezzata soggiorno Cuneo Piemonte" },
        { src: "/uploads/pareti5.png", alt: "Parete TV con illuminazione LED indiretta" },
        { src: "/uploads/pareti6.png", alt: "Parete attrezzata con pannelli e LED" },
      ]}
      serviceName="Pareti Attrezzate LED"
      serviceDescription="Pareti attrezzate in cartongesso con LED a Busca e Cuneo"
      relatedServices={[
        { href: "/controsoffitti-led", labelIT: "Controsoffitti LED", labelEN: "LED Ceilings", icon: "✦" },
        { href: "/frame-led-geometrici", labelIT: "Frame LED Geometrici", labelEN: "Geometric LED Frames", icon: "◈" },
        { href: "/illuminazione-lineare", labelIT: "Illuminazione Lineare", labelEN: "Linear Lighting", icon: "◐" },
        { href: "/cartongesso-residenziale", labelIT: "Cartongesso Residenziale", labelEN: "Residential Plasterboard", icon: "⬡" },
      ]}
    />
  );
}
