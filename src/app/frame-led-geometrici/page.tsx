"use client";
import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      badge="Frame LED Geometrici"
      badgeEN="Geometric LED Frames"
      titleIT="Frame LED Geometrici"
      titleEN="Geometric LED Frames"
      titleLine2IT="su Misura."
      titleLine2EN="Made to Measure."
      subtitleIT="Cornici e forme geometriche a LED per showroom, uffici e spazi residenziali di lusso. Design d'impatto, grandi formati e composizioni sovrapposte realizzate su misura a Busca, Cuneo e Piemonte."
      subtitleEN="Geometric LED frames and shapes for showrooms, offices and luxury residential spaces. High-impact design, large formats and overlapping compositions made to measure in Busca, Cuneo and Piemonte."
      descriptionIT="I frame LED geometrici sono la soluzione ideale per chi vuole distinguersi con un'illuminazione di design unica. Realizziamo composizioni con cornici rettangolari, trapezoidali o completamente libere, sovrapposte e inclinate per creare effetti scenografici di grande impatto visivo. Ogni frame è costruito su misura con profili LED ad alta luminosità."
      descriptionEN="Geometric LED frames are the ideal solution for those who want to stand out with a unique design lighting concept. We create compositions with rectangular, trapezoidal or completely free-form frames, overlapping and tilted to produce spectacular visual effects. Every frame is built to measure with high-brightness LED profiles."
      benefitsIT={["Forme rettangolari, trapezoidali o completamente libere","Cornici sovrapposte e inclinate per effetti scenografici","Grande formato fino a diversi metri per lato","LED ad alta luminosità con resa cromatica CRI 90+","Installazione a soffitto o a parete su struttura metallica","Adatto per showroom, negozi, uffici e abitazioni di lusso"]}
      benefitsEN={["Rectangular, trapezoidal or completely free-form shapes","Overlapping and tilted frames for scenic effects","Large format up to several metres per side","High-brightness LED with CRI 90+ colour rendering","Ceiling or wall installation on metal frame","Ideal for showrooms, shops, offices and luxury homes"]}
      heroImage="/uploads/controfisicover.png"
      heroImageAlt="Frame LED geometrici — M.B Cartongesso Busca"
      galleryImages={[]}
      serviceName="Frame LED Geometrici"
      serviceDescription="Frame LED geometrici su misura a Busca e Cuneo"
      relatedServices={[
        { href: "/controsoffitti-led", labelIT: "Controsoffitti LED", labelEN: "LED Ceilings", icon: "✦" },
        { href: "/pareti-attrezzate", labelIT: "Pareti Attrezzate", labelEN: "Feature Walls", icon: "▣" },
        { href: "/illuminazione-lineare", labelIT: "Illuminazione Lineare", labelEN: "Linear Lighting", icon: "◐" },
        { href: "/cartongesso-residenziale", labelIT: "Cartongesso Residenziale", labelEN: "Residential Plasterboard", icon: "⬡" },
      ]}
    />
  );
}
