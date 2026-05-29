"use client";
import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      badge="Illuminazione Lineare"
      badgeEN="Linear Lighting"
      titleIT="Profili LED Lineari"
      titleEN="Linear LED Profiles"
      titleLine2IT="a Incasso."
      titleLine2EN="Recessed."
      subtitleIT="Installiamo profili LED flush a incasso su soffitti piatti, inclinati o strutturati. Linee pulite, effetto premium e illuminazione su misura per ogni tipologia di spazio a Busca, Cuneo e Piemonte."
      subtitleEN="We install flush recessed LED profiles on flat, sloped or structured ceilings. Clean lines, premium effect and bespoke lighting for every type of space in Busca, Cuneo and Piemonte."
      descriptionIT="L'illuminazione lineare LED rappresenta il punto di incontro tra architettura e luce. Installiamo profili LED flush completamente incassati nel cartongesso, invisibili quando spenti e sorprendenti quando accesi. Realizziamo linee rette, diagonali, incrociate e composizioni geometriche su soffitti piatti, inclinati o con strutture complesse."
      descriptionEN="Linear LED lighting represents the meeting point between architecture and light. We install flush LED profiles fully recessed into plasterboard — invisible when off and stunning when on. We create straight, diagonal, crossed lines and geometric compositions on flat, sloped or complex ceiling structures."
      benefitsIT={["Profili flush completamente incassati: invisibili da spenti","Soffitti piatti, inclinati e strutturati senza limitazioni","Linee rette, diagonali e incrociate per ogni design","LED CRI 90+ per una resa cromatica naturale e fedele","Sistemi dimmer e CCT per regolare colore e intensità","Installazione pulita e precisa con finiture a regola d'arte"]}
      benefitsEN={["Fully flush recessed profiles: invisible when off","Flat, sloped and structured ceilings without limits","Straight, diagonal and crossed lines for any design","LED CRI 90+ for natural and faithful colour rendering","Dimmer and CCT systems to adjust colour and intensity","Clean and precise installation with perfect finishes"]}
      heroImage="/uploads/controfisicover.png"
      heroImageAlt="Profili LED lineari incassati nel soffitto — M.B Cartongesso Busca"
      galleryImages={[]}
      serviceName="Illuminazione Lineare LED"
      serviceDescription="Illuminazione lineare LED a incasso a Busca e Cuneo"
      relatedServices={[
        { href: "/controsoffitti-led", labelIT: "Controsoffitti LED", labelEN: "LED Ceilings", icon: "✦" },
        { href: "/pareti-attrezzate", labelIT: "Pareti Attrezzate", labelEN: "Feature Walls", icon: "▣" },
        { href: "/frame-led-geometrici", labelIT: "Frame LED Geometrici", labelEN: "Geometric LED Frames", icon: "◈" },
        { href: "/cartongesso-residenziale", labelIT: "Cartongesso Residenziale", labelEN: "Residential Plasterboard", icon: "⬡" },
      ]}
    />
  );
}
