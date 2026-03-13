import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { klantConfig } from "@/config/klant";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${klantConfig.bedrijfsnaam} | Vakman in ${klantConfig.stad}`,
  description: `${klantConfig.bedrijfsnaam} - Uw betrouwbare vakman in ${klantConfig.stad}. 24/7 bereikbaar, geen voorrijkosten. Bel ${klantConfig.telefoonnummer}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
