"use client";

import { klantConfig } from "@/config/klant";

export default function StickyBelKnop() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <a
        href={`tel:${klantConfig.telefoonnummer}`}
        className="flex items-center justify-center gap-2 bg-[--primary] text-white py-4 font-bold text-lg shadow-[0_-2px_10px_rgba(0,0,0,0.15)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        Bel nu: {klantConfig.telefoonnummer}
      </a>
    </div>
  );
}
