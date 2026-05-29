import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pareti Attrezzate con LED a Busca e Cuneo | M.B Cartongesso",
  description: "Realizziamo pareti attrezzate in cartongesso con illuminazione LED integrata a Busca, Cuneo e Piemonte. Pareti TV, librerie, pannelli decorativi su misura. Preventivo gratuito.",
  alternates: { canonical: "https://www.mbcartongesso.com/pareti-attrezzate" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
