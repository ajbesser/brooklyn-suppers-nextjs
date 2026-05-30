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
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:text-[15px]"
          style={{ fontFamily: "var(--font-newsreader)", background: "#2a1f16", color: "#f4eee2" }}
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
