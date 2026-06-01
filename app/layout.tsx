import type { Metadata, Viewport } from "next";
import { Newsreader, Kalam } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { DinnerBanner } from "@/components/DinnerBanner";
import { site } from "@/data/site";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf6ee",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Brooklyn Suppers — Monthly Dinner Club in Brooklyn",
  description:
    "Seasonal menus, wine, and good conversation around a long table in Brooklyn. Join the list to hear first about the next supper.",
  keywords: [
    "Brooklyn dinner club",
    "supper club Brooklyn",
    "Brooklyn supper club",
    "seasonal tasting menu",
    "community dinner Brooklyn",
    "monthly dinner NYC",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Brooklyn Suppers — Monthly Dinner Club in Brooklyn",
    description:
      "Seasonal menus, wine, and good conversation around a long table in Brooklyn.",
    url: site.url,
    siteName: "Brooklyn Suppers",
    images: [
      {
        url: "/images/hero-food.jpg",
        width: 1200,
        height: 630,
        alt: "Brooklyn Suppers — a full table spread with paella, candles, and shared dishes",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@brooklynsuppers",
    creator: "@brooklynsuppers",
    title: "Brooklyn Suppers — Monthly Dinner Club in Brooklyn",
    description:
      "Seasonal menus, wine, and good conversation around a long table in Brooklyn.",
    images: ["/images/hero-food.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${kalam.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:text-[15px]"
          style={{ fontFamily: "var(--font-newsreader)", background: "#2a1f16", color: "#f4eee2" }}
        >
          Skip to content
        </a>
        <JsonLd />
        <DinnerBanner />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
