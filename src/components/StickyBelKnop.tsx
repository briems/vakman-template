"use client";

import { klantConfig } from "@/config/klant";
import { Phone } from "lucide-react";

export default function StickyBelKnop() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <a
        href={`tel:${klantConfig.telefoonnummer}`}
        className="flex items-center justify-center gap-2 bg-[var(--vakman-primary)] text-white py-4 font-bold text-lg shadow-[0_-2px_10px_rgba(0,0,0,0.15)]"
      >
        <Phone className="h-5 w-5" />
        Bel nu: {klantConfig.telefoonnummer}
      </a>
    </div>
  );
}
