import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mrcartongesso.it"),
  title: {
    default: "M.B Cartongesso — Controsoffitti & LED a Busca, Cuneo | Piemonte",
    template: "%s | M.B Cartongesso",
  },
  description:
    "Specialisti in controsoffitti in cartongesso con LED integrati a Busca e Cuneo. Pareti attrezzate, illuminazione lineare, lavori residenziali e commerciali in Piemonte. Preventivo gratuito.",
  keywords: [
    "cartongesso Busca",
    "cartongesso Cuneo",
    "controsoffitti LED Busca",
    "controsoffitti in cartongesso Cuneo",
    "pareti in cartongesso",
    "lavori in cartongesso Piemonte",
    "ristrutturazioni interne Busca",
    "illuminazione LED Cuneo",
    "drywall company Busca Italy",
    "plasterboard company Cuneo",
    "M.B Cartongesso",
    "preventivo cartongesso gratuito",
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
    title: "M.B Cartongesso — Controsoffitti & LED a Busca, Cuneo",
    description:
      "Specialisti in controsoffitti in cartongesso con LED integrati a Busca e Cuneo. Pareti attrezzate e illuminazione su misura in Piemonte. Preventivo gratuito.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.mrcartongesso.it/#business",
  name: "M.B Cartongesso",
  alternateName: "Mr. Cartongesso",
  description:
    "Specialisti in controsoffitti in cartongesso con sistemi LED integrati a Busca e Cuneo. Pareti attrezzate, illuminazione lineare e lavori residenziali e commerciali in Piemonte.",
  url: "https://www.mrcartongesso.it",
  logo: "https://www.mrcartongesso.it/images/logo.png",
  image: "https://www.mrcartongesso.it/images/og-image.jpg",
  telephone: "+393889995326",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Busca",
    addressLocality: "Busca",
    addressRegion: "Piemonte",
    postalCode: "12022",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.5233,
    longitude: 7.4742,
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <LangProvider>
          <ScrollToTop />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}