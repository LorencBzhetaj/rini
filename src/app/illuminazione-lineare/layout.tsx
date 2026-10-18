import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata("Illuminazione Lineare LED a Busca e Cuneo", "Installiamo profili LED lineari a incasso su soffitti piatti, inclinati e strutturati a Busca, Cuneo e Piemonte. Linee diagonali, incrociate e flush. Preventivo gratuito.", "illuminazione-lineare");
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
