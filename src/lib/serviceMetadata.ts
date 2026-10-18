import type { Metadata } from "next";

export function serviceMetadata(title: string, description: string, slug: string): Metadata {
  const url = `https://www.mbcartongesso.com/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", locale: "it_IT", siteName: "M.B Cartongesso",
      title: `${title} | M.B Cartongesso`, description, url,
      images: [{url: "/images/og-image.jpg", width: 1269, height: 952, alt: "Controsoffitto con illuminazione LED — M.B Cartongesso"}],
    },
    twitter: {card: "summary_large_image", title: `${title} | M.B Cartongesso`, description, images: ["/images/og-image.jpg"]},
  };
}
