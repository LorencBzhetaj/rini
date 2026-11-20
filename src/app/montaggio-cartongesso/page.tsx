import { serviceMetadata } from "@/lib/serviceMetadata";
import DrywallGuide from "@/components/DrywallGuide";

export const metadata = serviceMetadata("Montaggio cartongesso a Busca e Cuneo", "Montaggio cartongesso a Busca, Cuneo e provincia: pareti divisorie, contropareti e controsoffitti, dal tracciamento a stuccatura e finitura. Preventivo gratuito in 24 ore.", "montaggio-cartongesso");

export default function Page() {
  return <DrywallGuide title={["Montaggio cartongesso a Busca e Cuneo", "Drywall installation in Busca and Cuneo"]} intro={["Posa di pareti divisorie, contropareti e controsoffitti in cartongesso.", "Installation of drywall partitions, wall linings and suspended ceilings."]} sections={[
  [
    "Dal tracciamento alla posa",
    "From marking out to installation",
    "Verifichiamo supporti e misure, poi tracciamo la struttura e pianifichiamo passaggi degli impianti e rinforzi. Il tipo di lastra si sceglie in base all’ambiente e alle esigenze del lavoro.",
    "We check the supports and measurements, then mark out the frame and plan service routes and reinforcement. Board types depend on the room and the job requirements."
  ],
  [
    "Giunti, stuccatura e finitura",
    "Joints, filling and finishing",
    "Dopo la posa si trattano giunti e fissaggi. Nel preventivo è utile distinguere la preparazione della superficie dalle finiture successive, come la tinteggiatura.",
    "After fitting the boards, the joints and fasteners are treated. The quote should distinguish surface preparation from subsequent finishes such as painting."
  ]
]} images={[{ src: "/images/proj5-b.jpg", altIT: "Struttura di un controsoffitto a livelli in cartongesso durante la posa", altEN: "Multi-level drywall ceiling frame during installation" }, { src: "/uploads/controfisi7.png", altIT: "Soggiorno durante i lavori: controsoffitto con LED perimetrale e pannello TV in cartongesso", altEN: "Living room during works: ceiling with perimeter LED and drywall TV panel" }]} related={[{ href: "/cartongesso-residenziale", it: "Pareti divisorie e contropareti", en: "Partitions and wall linings" }, { href: "/controsoffitti-led", it: "Controsoffitti in cartongesso con LED", en: "Drywall ceilings with LED" }, { href: "/cartongesso-su-misura", it: "Cartongesso su misura", en: "Bespoke drywall" }, { href: "/cartongesso-prezzo-al-mq", it: "Cartongesso: prezzo al mq", en: "Drywall cost per m²" }]} />;
}
