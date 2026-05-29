import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Frame LED Geometrici a Busca e Cuneo | M.B Cartongesso",
  description: "Realizziamo frame LED geometrici su misura per showroom, uffici e spazi di lusso a Busca, Cuneo e Piemonte. Cornici LED sovrapposte, grandi formati. Preventivo gratuito.",
  alternates: { canonical: "https://www.mbcartongesso.com/frame-led-geometrici" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
