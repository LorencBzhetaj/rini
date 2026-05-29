import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cartongesso Residenziale a Busca e Cuneo | M.B Cartongesso",
  description: "Partizioni interne, contropareti, coibentazione acustica e termica in cartongesso a Busca, Cuneo e Piemonte. Rifinitura e stucco professionale. Preventivo gratuito.",
  alternates: { canonical: "https://www.mbcartongesso.com/cartongesso-residenziale" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
