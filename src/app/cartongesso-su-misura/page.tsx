import { serviceMetadata } from "@/lib/serviceMetadata";
import DrywallGuide from "@/components/DrywallGuide";

export const metadata = serviceMetadata("Cartongesso su misura a Busca e Cuneo", "Cartongesso su misura a Busca e Cuneo: nicchie, pareti TV, librerie e soluzioni con LED progettate sulle misure della stanza. Preventivo gratuito, risposta entro 24 ore.", "cartongesso-su-misura");

export default function Page() {
  return <DrywallGuide title={["Cartongesso su misura a Busca e Cuneo", "Bespoke drywall in Busca and Cuneo"]} intro={["Nicchie, pareti TV e soluzioni in cartongesso progettate sulle misure della stanza.", "Custom niches, TV walls and drywall features designed around the room."]} sections={[
  [
    "Partiamo dalle misure e dall’uso della stanza",
    "We start with the room and how you use it",
    "Per una parete TV servono le misure dello schermo e della staffa; per una nicchia, quelle degli oggetti da esporre. Definiamo ingombri e punti luce prima di chiudere la struttura.",
    "For a TV wall, we need the screen and bracket dimensions. For a niche, we need the dimensions of the objects it will hold. We plan clearances and lighting before closing the frame."
  ],
  [
    "Integrare luce e cavi",
    "Integrating lighting and cables",
    "Se il progetto include LED, predisponiamo spazi per profili, cablaggi e accesso agli alimentatori. Foto e pianta aiutano a discutere finiture e proporzioni.",
    "If the project includes LEDs, we plan space for profiles, cables and access to the drivers. Photos and a floor plan help us discuss finishes and proportions."
  ]
]} images={[{ src: "/images/proj4-cover.jpg", altIT: "Parete TV in cartongesso con LED indiretto e mensole illuminate", altEN: "Drywall TV wall with indirect LED and lit shelves" }, { src: "/uploads/parete2.png", altIT: "Libreria in cartongesso con nicchie illuminate", altEN: "Drywall bookcase with lit niches" }]} related={[{ href: "/pareti-attrezzate", it: "Pareti attrezzate con LED", en: "Feature walls with LED" }, { href: "/controsoffitti-led", it: "Controsoffitti in cartongesso con LED", en: "Drywall ceilings with LED" }, { href: "/montaggio-cartongesso", it: "Montaggio cartongesso", en: "Drywall installation" }, { href: "/cartongesso-prezzo-al-mq", it: "Cartongesso: prezzo al mq", en: "Drywall cost per m²" }]} />;
}
