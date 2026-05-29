import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Controsoffitti LED a Busca e Cuneo | M.B Cartongesso",
  description: "Realizziamo controsoffitti in cartongesso con LED integrati a Busca, Cuneo e Piemonte. Luce indiretta, profili lineari, soffitti multi-livello. Preventivo gratuito.",
  alternates: { canonical: "https://www.mbcartongesso.com/controsoffitti-led" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
