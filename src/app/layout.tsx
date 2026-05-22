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
  title: "Skåne International Founders Club",
  description:
    "A QUILONS AI for expats and international entrepreneurs building in Skåne.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/images/SIF Club-Gemini3.png",
    apple: "/images/SIF Club-Gemini3.png",
  },
  openGraph: {
    title: "Skåne International Founders Club",
    description:
      "A QUILONS AI for expats and international entrepreneurs building in Skåne.",
    siteName: "Skåne International Founders Club",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/SIF Club-Gemini3.png",
        alt: "Skåne International Founders Club — SIF Club logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skåne International Founders Club",
    description:
      "A QUILONS AI for expats and international entrepreneurs building in Skåne.",
    images: ["/images/SIF Club-Gemini3.png"],
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
