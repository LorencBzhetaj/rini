import { serviceMetadata } from "@/lib/serviceMetadata";
import DrywallGuide from "@/components/DrywallGuide";

export const metadata = serviceMetadata("Cartongesso: prezzo al mq e preventivo a Busca e Cuneo", "Cartongesso prezzo al mq a Busca e Cuneo: cosa incide sul costo di pareti e controsoffitti e cosa inviare per un preventivo gratuito. Risposta entro 24 ore.", "cartongesso-prezzo-al-mq");

export default function Page() {
  return <DrywallGuide title={["Cartongesso: prezzo al mq e preventivo a Busca e Cuneo", "Drywall cost per square metre in Busca and Cuneo"]} intro={["Come si calcola un preventivo per pareti e controsoffitti in cartongesso.", "How quotes for drywall partitions and ceilings are calculated."]} sections={[
  [
    "Cosa incide sul prezzo al mq?",
    "What affects the price per square metre?",
    "Una parete semplice e un controsoffitto con LED richiedono lavorazioni diverse. Oltre ai metri quadrati, contano struttura, numero e tipo di lastre, isolamento, finitura, altezza e accesso al cantiere. Nicchie, curve e luce integrata si valutano a parte nel progetto.",
    "A simple wall and a suspended ceiling with LEDs require different work. Beyond the area, cost depends on framing, board layers and types, insulation, finish, height and site access. Niches, curves and integrated lights are assessed separately in the design."
  ],
  [
    "Cosa inviare per un preventivo",
    "What to send for a quote",
    "Indica il comune, le misure approssimative, il tipo di intervento e la finitura desiderata. Allega foto se disponibili. Chiedi quali voci sono incluse, come posa, stuccatura, tinteggiatura o illuminazione, per confrontare preventivi equivalenti.",
    "Share the town, approximate measurements, type of work and desired finish. Attach photos if available. Check what each quote includes, such as fitting, filling, painting or lighting, so you can compare like for like."
  ]
]} images={[]} related={[{ href: "/cartongesso-residenziale", it: "Pareti divisorie e contropareti", en: "Partitions and wall linings" }, { href: "/controsoffitti-led", it: "Controsoffitti in cartongesso con LED", en: "Drywall ceilings with LED" }, { href: "/pareti-attrezzate", it: "Pareti attrezzate con LED", en: "Feature walls with LED" }, { href: "/montaggio-cartongesso", it: "Montaggio cartongesso", en: "Drywall installation" }]} />;
}
