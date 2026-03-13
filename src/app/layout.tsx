import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { klantConfig } from "@/config/klant";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
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
    <html lang="nl" className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
