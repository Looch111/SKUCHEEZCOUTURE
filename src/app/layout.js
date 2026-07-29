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

export const metadata = {
  metadataBase: new URL("https://skucheez-couture.com"),
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
    url: "https://skucheez-couture.com",
    siteName: "SKUCHEEZ COUTURE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://skucheez-couture.com/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
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
    images: ["https://skucheez-couture.com/og-image.jpg"],
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
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SKUCHEEZ COUTURE" />
        <meta property="og:title" content="SKUCHEEZ COUTURE — Luxury West African Menswear" />
        <meta
          property="og:description"
          content="Handcrafted Agbada, Ankara suits, kaftans, and ceremonial attire for weddings, celebrations, and distinguished occasions. Proudly made in Warri."
        />
        <meta property="og:image" content="https://skucheez-couture.com/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://skucheez-couture.com/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Skucheezfx" />
        <meta name="twitter:title" content="SKUCHEEZ COUTURE — Luxury West African Menswear" />
        <meta
          name="twitter:description"
          content="Handcrafted Agbada, Ankara suits, kaftans, and ceremonial attire for weddings, celebrations, and distinguished occasions. Proudly made in Warri."
        />
        <meta name="twitter:image" content="https://skucheez-couture.com/og-image.jpg" />

        <link rel="preload" href="/man.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}