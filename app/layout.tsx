import type { Metadata, Viewport } from "next";
import { Newsreader, Kalam } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
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
  metadataBase: new URL("https://brooklynsuppers.com"),
  title: "Brooklyn Suppers — A Monthly Table in Bed-Stuy",
  description:
    "Eight seats, one table, seasonal menus. A monthly dinner for people who eat with intention. Bed-Stuy, Brooklyn.",
  keywords: [
    "Brooklyn dinner club",
    "supper club Brooklyn",
    "Bed-Stuy dinner",
    "seasonal tasting menu",
    "private dining Brooklyn",
    "monthly dinner NYC",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Brooklyn Suppers — A Monthly Table in Bed-Stuy",
    description:
      "Eight seats, one table, seasonal menus. A monthly dinner for people who eat with intention.",
    url: "https://brooklynsuppers.com",
    siteName: "Brooklyn Suppers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brooklyn Suppers — a long dinner in Bed-Stuy",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@brooklynsuppers",
    creator: "@brooklynsuppers",
    title: "Brooklyn Suppers — A Monthly Table in Bed-Stuy",
    description:
      "Eight seats, one table, seasonal menus. A monthly dinner for people who eat with intention.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
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
        {children}
      </body>
    </html>
  );
}
