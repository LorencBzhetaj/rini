import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Illuminazione Lineare LED a Busca e Cuneo | M.B Cartongesso",
  description: "Installiamo profili LED lineari a incasso su soffitti piatti, inclinati e strutturati a Busca, Cuneo e Piemonte. Linee diagonali, incrociate e flush. Preventivo gratuito.",
  alternates: { canonical: "https://www.mbcartongesso.com/illuminazione-lineare" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
