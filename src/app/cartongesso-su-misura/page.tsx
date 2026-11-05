import { serviceMetadata } from "@/lib/serviceMetadata";
import DrywallGuide from "@/components/DrywallGuide";

export const metadata = serviceMetadata("Cartongesso su misura a Busca e Cuneo", "Nicchie, pareti TV e soluzioni in cartongesso progettate sulle misure della stanza.", "cartongesso-su-misura");

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
]} />;
}
