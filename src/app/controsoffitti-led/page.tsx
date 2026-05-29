"use client";
import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      badge="Controsoffitti LED"
      badgeEN="LED Ceilings"
      titleIT="Controsoffitti in Cartongesso"
      titleEN="Plasterboard Ceilings"
      titleLine2IT="con LED Integrati."
      titleLine2EN="with Integrated LED."
      subtitleIT="Soffitti eleganti a uno o più livelli con strip LED integrate, luce indiretta perimetrale e profili lineari incassati. Realizziamo interni di lusso a Busca, Cuneo e in tutta la provincia di Piemonte."
      subtitleEN="Elegant single or multi-level ceilings with integrated LED strips, perimeter indirect lighting and recessed linear profiles. We create luxury interiors in Busca, Cuneo and throughout Piemonte."
      descriptionIT="I nostri controsoffitti in cartongesso trasformano ogni ambiente in uno spazio di design sofisticato. Utilizziamo lastre certificate e profili in acciaio galvanizzato di alta qualità, abbinati a sistemi LED personalizzabili (RGB, CCT, dimmer). Ogni progetto è studiato su misura per valorizzare la luce naturale e creare atmosfere scenografiche, sia in ambienti residenziali che commerciali."
      descriptionEN="Our plasterboard ceilings transform any space into a sophisticated design environment. We use certified boards and high-quality galvanised steel profiles, combined with customisable LED systems (RGB, CCT, dimmer). Every project is tailored to enhance natural light and create scenic atmospheres, in both residential and commercial settings."
      benefitsIT={["Luce indiretta perimetrale con effetto alone elegante","Profili LED lineari a incasso per linee pulite e moderne","Soffitti multi-livello per ambienti con volume e profondità","Sistemi RGB, CCT e dimmer per ogni atmosfera","Materiali certificati: resistenza al fuoco e all'umidità","Progettazione e posa completamente su misura"]}
      benefitsEN={["Perimeter indirect lighting with elegant halo effect","Recessed linear LED profiles for clean, modern lines","Multi-level ceilings for spaces with volume and depth","RGB, CCT and dimmer systems for every atmosphere","Certified materials: fire and moisture resistant","Fully bespoke design and installation"]}
      heroImage="/uploads/controfisicover.png"
      heroImageAlt="Controsoffitto LED a Busca, Cuneo — M.B Cartongesso"
      galleryImages={[
        { src: "/uploads/controfisicover.png", alt: "Controsoffitto LED — M.B Cartongesso Busca" },
        { src: "/uploads/controfisi1.png", alt: "Controsoffitto con luce indiretta perimetrale" },
        { src: "/uploads/controfisi2.png", alt: "Profili LED lineari incassati nel soffitto" },
        { src: "/uploads/controfisi3.png", alt: "Soffitto in cartongesso con LED Cuneo" },
        { src: "/uploads/controfisi4.png", alt: "Controsoffitto multi-livello Piemonte" },
        { src: "/uploads/controfisi5.png", alt: "Illuminazione LED indiretta soggiorno" },
      ]}
      serviceName="Controsoffitti LED"
      serviceDescription="Controsoffitti in cartongesso con LED a Busca e Cuneo"
      relatedServices={[
        { href: "/pareti-attrezzate", labelIT: "Pareti Attrezzate", labelEN: "Feature Walls", icon: "▣" },
        { href: "/frame-led-geometrici", labelIT: "Frame LED Geometrici", labelEN: "Geometric LED Frames", icon: "◈" },
        { href: "/illuminazione-lineare", labelIT: "Illuminazione Lineare", labelEN: "Linear Lighting", icon: "◐" },
        { href: "/cartongesso-residenziale", labelIT: "Cartongesso Residenziale", labelEN: "Residential Plasterboard", icon: "⬡" },
      ]}
    />
  );
}
