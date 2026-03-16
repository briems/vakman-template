"use client";

import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const platforms = [
  { naam: "Google", score: "4.9", reviews: "47" },
  { naam: "Werkspot", score: "9.4", reviews: "32" },
];

export default function SocialProofBar() {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <section className="relative bg-white py-6 border-b border-gray-100 -mt-1 z-10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? "visible" : ""}`}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {/* Platform scores */}
          {platforms.map((platform) => (
            <div key={platform.naam} className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-[var(--vakman-navy)]">{platform.score}</span>
                <span className="text-gray-400 mx-1">op</span>
                <span className="font-semibold text-[var(--vakman-navy)]">{platform.naam}</span>
                <span className="text-gray-400 ml-1">({platform.reviews}+)</span>
              </div>
            </div>
          ))}

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-gray-200" />

          {/* Trust text */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 12 15 16 10" />
            </svg>
            <span>Geen voorrijkosten &bull; Garantie op werk</span>
          </div>
        </div>
      </div>
    </section>
  );
}
