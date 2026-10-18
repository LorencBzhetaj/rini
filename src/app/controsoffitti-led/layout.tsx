import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata("Controsoffitti LED a Busca e Cuneo", "Realizziamo controsoffitti in cartongesso con LED integrati a Busca, Cuneo e Piemonte. Luce indiretta, profili lineari, soffitti multi-livello. Preventivo gratuito.", "controsoffitti-led");
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
