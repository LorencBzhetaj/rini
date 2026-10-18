import { serviceMetadata } from "@/lib/serviceMetadata";
export const metadata = serviceMetadata("Pareti Attrezzate con LED a Busca e Cuneo", "Realizziamo pareti attrezzate in cartongesso con illuminazione LED integrata a Busca, Cuneo e Piemonte. Pareti TV, librerie, pannelli decorativi su misura. Preventivo gratuito.", "pareti-attrezzate");
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
