import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { klantConfig } from "@/config/klant";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${klantConfig.bedrijfsnaam} | Vakman in ${klantConfig.stad}`,
  description: `${klantConfig.bedrijfsnaam} - Uw betrouwbare vakman in ${klantConfig.stad}. ${klantConfig.jarenlange_ervaring} jaar ervaring, gecertificeerd en 24/7 bereikbaar. Bel ${klantConfig.telefoonnummer}.`,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: `${klantConfig.bedrijfsnaam} | Vakman in ${klantConfig.stad}`,
    description: `Betrouwbare vakman met ${klantConfig.jarenlange_ervaring} jaar ervaring in ${klantConfig.werkgebied}.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${poppins.variable} ${openSans.variable}`}>
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
