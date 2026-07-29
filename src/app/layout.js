import { Cormorant_Garamond, Plus_Jakarta_Sans, Italiana } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const italiana = Italiana({
  variable: "--font-milchella",
  subsets: ["latin"],
  weight: ["400"],
});

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skucheezcouture.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SKUCHEEZ COUTURE — Luxury West African Menswear",
    template: "%s | SKUCHEEZ COUTURE",
  },
  description:
    "Handcrafted Agbada, Ankara suits, kaftans, and ceremonial attire for weddings, celebrations, and distinguished occasions. Proudly made in Warri.",
  keywords: [
    "SKUCHEEZ COUTURE",
    "Agbada",
    "Ankara suits",
    "Kaftans",
    "Luxury West African Menswear",
    "bespoke tailoring",
    "Warri fashion atelier",
    "Nigerian luxury fashion",
    "ceremonial attire",
  ],
  authors: [{ name: "SKUCHEEZ COUTURE Atelier" }],
  creator: "SKUCHEEZ COUTURE",
  publisher: "SKUCHEEZ COUTURE",
  openGraph: {
    title: "SKUCHEEZ COUTURE — Luxury West African Menswear",
    description:
      "Handcrafted Agbada, Ankara suits, kaftans, and ceremonial attire for weddings, celebrations, and distinguished occasions. Proudly made in Warri.",
    url: siteUrl,
    siteName: "SKUCHEEZ COUTURE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-logo.jpg",
        width: 1200,
        height: 630,
        alt: "SKUCHEEZ COUTURE Atelier Logo",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SKUCHEEZ COUTURE — Luxury West African Menswear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SKUCHEEZ COUTURE — Luxury West African Menswear",
    description:
      "Handcrafted Agbada, Ankara suits, kaftans, and ceremonial attire for weddings, celebrations, and distinguished occasions. Proudly made in Warri.",
    site: "@Skucheezfx",
    creator: "@Skucheezfx",
    images: ["/og-logo.jpg", "/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=2", type: "image/png" },
      { url: "/icon.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${italiana.variable}`}>
      <body>{children}</body>
    </html>
  );
}