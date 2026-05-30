import type { Metadata } from "next";
import { Newsreader, Kalam } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://brooklynsuppers.com"),
  title: "Brooklyn Suppers — A Monthly Table in Bed-Stuy",
  description:
    "Eight seats, one table, seasonal menus. A monthly dinner for people who eat with intention. Bed-Stuy, Brooklyn.",
  openGraph: {
    title: "Brooklyn Suppers — A Monthly Table in Bed-Stuy",
    description:
      "Eight seats, one table, seasonal menus. A monthly dinner for people who eat with intention.",
    url: "https://brooklynsuppers.com",
    siteName: "Brooklyn Suppers",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      <body>{children}</body>
    </html>
  );
}
