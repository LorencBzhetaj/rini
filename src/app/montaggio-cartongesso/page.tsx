import { serviceMetadata } from "@/lib/serviceMetadata";
import DrywallGuide from "@/components/DrywallGuide";

export const metadata = serviceMetadata("Montaggio cartongesso a Busca e Cuneo", "Posa di pareti divisorie, contropareti e controsoffitti in cartongesso.", "montaggio-cartongesso");

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
]} />;
}
