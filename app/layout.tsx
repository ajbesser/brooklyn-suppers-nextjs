import type { Metadata, Viewport } from "next";
import { Newsreader, Kalam } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { DinnerBanner } from "@/components/DinnerBanner";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
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
  themeColor: "#093525",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata("Brooklyn Suppers — Monthly Dinner Club in Brooklyn", "Seasonal menus, wine, and good conversation around a long table in Brooklyn. Join the list to hear first about the next supper."),
  keywords: ["Brooklyn dinner club", "supper club Brooklyn", "seasonal menus", "community dinner Brooklyn", "monthly dinner NYC"],
  robots: { index: true, follow: true },
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
          style={{ fontFamily: "var(--font-newsreader)", background: "#0c1f17", color: "#eef2ea" }}
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
