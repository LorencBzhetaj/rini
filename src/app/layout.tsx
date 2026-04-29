import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mrcartongesso.it"),
  title: {
    default: "M.B Cartongesso — Maestri del Cartongesso & LED in Italia",
    template: "%s | M.B Cartongesso",
  },
  description:
    "Specialisti in controsoffitti in cartongesso con sistemi LED integrati. Progettiamo e installiamo soluzioni su misura per residenze e spazi commerciali in tutta Italia. Preventivo gratuito.",
  keywords: [
    "cartongesso","controsoffitti LED","illuminazione LED","controsoffitti su misura",
    "cartongesso Italia","profili LED incasso","cornici LED","frame LED geometrici",
    "parete TV cartongesso","illuminazione indiretta","M.B Cartongesso",
  ],
  authors: [{ name: "M.B Cartongesso" }],
  creator: "M.B Cartongesso",
  publisher: "M.B Cartongesso",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: "en_GB",
    url: "https://www.mrcartongesso.it",
    siteName: "M.B Cartongesso",
    title: "M.B Cartongesso — Maestri del Cartongesso & LED",
    description: "Specialisti in controsoffitti in cartongesso con sistemi LED integrati. Soluzioni su misura per residenze e spazi commerciali in tutta Italia.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "M.B Cartongesso" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.B Cartongesso — Maestri del Cartongesso & LED",
    description: "Specialisti in controsoffitti in cartongesso con sistemi LED integrati.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  alternates: {
    canonical: "https://www.mrcartongesso.it",
  },
};

export const viewport: Viewport = {
  themeColor: "#6B4C2A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
