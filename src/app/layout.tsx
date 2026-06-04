import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import ScrollToTop from "@/components/ScrollToTop";

const BASE_URL = "https://www.mbcartongesso.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    "controsoffitti Piemonte",
    "cartongesso Cuneo provincia",
    "illuminazione indiretta LED Piemonte",
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
    url: BASE_URL,
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
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
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/og-image.jpg`,
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto costa un controsoffitto in cartongesso con LED a Busca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il costo dipende dalla metratura, dal numero di livelli e dal sistema LED scelto. Offriamo preventivi gratuiti e trasparenti. Contattaci per una valutazione personalizzata.",
      },
    },
    {
      "@type": "Question",
      name: "Operate solo a Busca o anche in tutta la provincia di Cuneo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operiamo a Busca, Cuneo e in tutta la provincia di Piemonte. Contattaci per verificare la disponibilità nella tua zona.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo richiede la posa di un controsoffitto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I tempi variano in base alla complessità del progetto. Un controsoffitto standard in un soggiorno richiede generalmente 2-4 giorni lavorativi.",
      },
    },
    {
      "@type": "Question",
      name: "Realizzate anche lavori commerciali oltre che residenziali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, realizziamo progetti sia residenziali che commerciali: showroom, uffici, negozi e spazi di lusso con frame LED geometrici su misura.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
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