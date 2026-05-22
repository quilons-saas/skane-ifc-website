import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://skaneifc.com";

export const metadata: Metadata = {
  title: {
    default: "Skåne IFC — Skåne International Founders Club",
    template: "%s — Skåne IFC",
  },
  description:
    "Skåne IFC (Skåne International Founders Club) — a QUILONS AI community initiative for expats and international entrepreneurs building in Skåne.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/images/skane-ifc-logo.png",
    apple: "/images/skane-ifc-logo.png",
  },
  openGraph: {
    title: "Skåne IFC — Skåne International Founders Club",
    description:
      "A QUILONS AI community initiative for expats and international entrepreneurs building in Skåne.",
    siteName: "Skåne IFC",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/skane-ifc-logo.png",
        alt: "Skåne IFC logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skåne IFC — Skåne International Founders Club",
    description:
      "A QUILONS AI community initiative for expats and international entrepreneurs building in Skåne.",
    images: ["/images/skane-ifc-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
