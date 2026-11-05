import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata("Pareti in cartongesso a Busca e Cuneo", "Pareti divisorie, contropareti, coibentazione acustica e termica in cartongesso a Busca, Cuneo e Piemonte. Rifinitura e stucco professionale. Preventivo gratuito.", "cartongesso-residenziale");
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
