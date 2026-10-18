import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

const BASE_URL = "https://www.mbcartongesso.com";
const displayFont = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "M.B Cartongesso — Controsoffitti & LED a Busca, Cuneo | Piemonte",
    template: "%s | M.B Cartongesso",
  },
  description:
    "Specialisti in controsoffitti in cartongesso con LED integrati a Busca e Cuneo. Pareti attrezzate, illuminazione lineare, lavori residenziali e commerciali in Piemonte. Preventivo gratuito.",
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
    url: BASE_URL,
    siteName: "M.B Cartongesso",
    title: "M.B Cartongesso — Controsoffitti & LED a Busca, Cuneo",
    description:
      "Specialisti in controsoffitti in cartongesso con LED integrati a Busca e Cuneo. Pareti attrezzate e illuminazione su misura in Piemonte. Preventivo gratuito.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1269,
        height: 952,
        alt: "M.B Cartongesso — Controsoffitti LED a Busca, Cuneo, Piemonte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.B Cartongesso — Controsoffitti & LED a Busca, Cuneo",
    description:
      "Specialisti in controsoffitti in cartongesso con LED integrati. Busca, Cuneo, Piemonte. Preventivo gratuito.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-96x96.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
  other: {
    google: "notranslate",
  },
};

export const viewport: Viewport = {
  themeColor: "#6B4C2A",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "M.B Cartongesso",
  alternateName: "Mr. Cartongesso",
  description:
    "Specialisti in controsoffitti in cartongesso con sistemi LED integrati a Busca e Cuneo. Pareti attrezzate, illuminazione lineare e lavori residenziali e commerciali in Piemonte.",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo-transparent.png`,
  image: `${BASE_URL}/images/og-image.jpg`,
  telephone: "+393889995326",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Busca",
    addressRegion: "Piemonte",
    postalCode: "12022",
    addressCountry: "IT",
  },
  areaServed: [
    { "@type": "City", name: "Busca" },
    { "@type": "City", name: "Cuneo" },
    { "@type": "State", name: "Piemonte" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi Cartongesso",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Controsoffitti LED",
          description:
            "Soffitti in cartongesso a uno o più livelli con strip LED integrate. Luce indiretta, cornici luminose, profili lineari incassati a Busca e Cuneo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pareti Attrezzate in Cartongesso",
          description:
            "Pareti TV, librerie e pannelli rivestimento con illuminazione LED integrata in Piemonte.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cartongesso Residenziale",
          description:
            "Partizioni interne, contropareti, coibentazione acustica e termica a Busca, Cuneo e provincia.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Illuminazione Lineare LED",
          description:
            "Installazione di profili LED a incasso su soffitti piatti, inclinati o strutturati in Piemonte.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frame LED Geometrici",
          description:
            "Cornici e forme geometriche a LED per showroom, uffici e spazi residenziali di lusso.",
        },
      },
    ],
  },
  sameAs: ["https://www.instagram.com/rino_rinoo"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" translate="no" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RD2N0DV1T9" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RD2N0DV1T9');
        `}</Script>
        <a className="skip-link" href="#main-content">Vai al contenuto</a>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
