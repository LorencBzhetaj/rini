"use client";
import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      badge="Cartongesso Residenziale"
      badgeEN="Residential Plasterboard"
      titleIT="Lavori in Cartongesso"
      titleEN="Plasterboard Works"
      titleLine2IT="Residenziale."
      titleLine2EN="Residential."
      subtitleIT="Partizioni interne, contropareti e coibentazione acustica e termica per ristrutturazioni residenziali a Busca, Cuneo e in tutta la provincia di Piemonte. Rifinitura e stucco professionale."
      subtitleEN="Internal partitions, counter-walls and acoustic and thermal insulation for residential renovations in Busca, Cuneo and throughout Piemonte. Professional stucco and finishing."
      descriptionIT="Il cartongesso residenziale è la soluzione più versatile ed efficiente per chi vuole ristrutturare o riorganizzare gli spazi interni. Realizziamo pareti divisorie, contropareti e sistemi di coibentazione acustica e termica con lastre certificate di alta qualità. La rifinitura a stucco e la verniciatura sono eseguite con cura artigianale."
      descriptionEN="Residential plasterboard is the most versatile and efficient solution for those who want to renovate or reorganise interior spaces. We install dividing walls, counter-walls and acoustic and thermal insulation systems using certified high-quality boards. Stucco finishing and painting are carried out with artisanal care."
      benefitsIT={["Pareti divisorie in cartongesso per ridisegnare gli spazi","Contropareti con isolamento acustico e termico certificato","Lastre antiumidità per bagni, cucine e spazi tecnici","Rifinitura a stucco e verniciatura professionale inclusa","Interventi rapidi con minima polvere e disturbo","Soluzioni economiche e conformi alle normative vigenti"]}
      benefitsEN={["Dividing walls in plasterboard to redesign spaces","Counter-walls with certified acoustic and thermal insulation","Moisture-resistant boards for bathrooms, kitchens and utility areas","Professional stucco finishing and painting included","Fast work with minimal dust and disruption","Cost-effective solutions compliant with current regulations"]}
      heroImage="/uploads/fotocover_image.png"
      heroImageAlt="Lavori in cartongesso residenziale a Busca, Cuneo — M.B Cartongesso"
      galleryImages={[]}
      serviceName="Cartongesso Residenziale"
      serviceDescription="Lavori in cartongesso residenziale a Busca e Cuneo"
      relatedServices={[
        { href: "/controsoffitti-led", labelIT: "Controsoffitti LED", labelEN: "LED Ceilings", icon: "✦" },
        { href: "/pareti-attrezzate", labelIT: "Pareti Attrezzate", labelEN: "Feature Walls", icon: "▣" },
        { href: "/illuminazione-lineare", labelIT: "Illuminazione Lineare", labelEN: "Linear Lighting", icon: "◐" },
        { href: "/frame-led-geometrici", labelIT: "Frame LED Geometrici", labelEN: "Geometric LED Frames", icon: "◈" },
      ]}
    />
  );
}
