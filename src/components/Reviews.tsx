"use client";

import { klantConfig } from "@/config/klant";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Sterren({ aantal }: { aantal: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: aantal }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function Avatar({ naam }: { naam: string }) {
  const initialen = naam
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const kleuren = [
    "bg-[var(--vakman-primary)]",
    "bg-[var(--vakman-navy)]",
    "bg-emerald-600",
  ];
  const kleur = kleuren[naam.length % kleuren.length];

  return (
    <div
      className={`w-12 h-12 ${kleur} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
    >
      {initialen}
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 text-center max-w-sm mx-auto mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <svg viewBox="0 0 24 24" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        <div className="text-left">
          <p className="font-bold text-[var(--vakman-navy)] text-lg font-[family-name:var(--font-heading)]">Google Reviews</p>
          <p className="text-gray-400 text-sm">Geverifieerde reviews</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mb-2">
        <span className="text-5xl font-extrabold text-[var(--vakman-navy)] font-[family-name:var(--font-heading)]">4.9</span>
        <div className="flex flex-col items-start">
          <Sterren aantal={5} />
          <p className="text-gray-400 text-xs mt-1">47 reviews</p>
        </div>
      </div>
    </div>
  );
}

function PlatformLogos() {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <div
      ref={ref}
      className={`mt-14 pt-10 border-t border-gray-200 reveal ${visible ? "visible" : ""}`}
    >
      <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
        Zoals te zien op
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {[
          { naam: "Werkspot", kleur: "#FF6600", letter: "W" },
          { naam: "Thuisklussen", kleur: "#2B7A3E", letter: "T" },
          { naam: "Google", kleur: "#4285F4", letter: "G" },
        ].map((platform) => (
          <div key={platform.naam} className="flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-default">
            <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
              <rect width="32" height="32" rx="8" fill={platform.kleur} />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="15" fontWeight="bold" fill="white" fontFamily="Arial">{platform.letter}</text>
            </svg>
            <span className="text-gray-500 font-bold text-lg">{platform.naam}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, visible: cardsVisible } = useScrollReveal(0.1);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="text-[var(--vakman-primary)] font-bold text-sm uppercase tracking-widest mb-3 block">
            Klantervaringen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--vakman-navy)] mb-5 font-[family-name:var(--font-heading)] leading-tight">
            Onze klanten spreken{" "}
            <span className="gradient-text">voor zich</span>
          </h2>
        </div>

        <GoogleBadge />

        {/* Review cards */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children ${cardsVisible ? "visible" : ""}`}
        >
          {klantConfig.reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-[var(--vakman-primary)]/20 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              {/* Quote mark */}
              <Quote className="h-8 w-8 text-[var(--vakman-primary)]/20 mb-4" />

              <Sterren aantal={review.sterren} />

              <p className="text-[var(--vakman-navy)] mt-4 mb-6 leading-relaxed text-base">
                &ldquo;{review.tekst}&rdquo;
              </p>

              <div className="border-t border-gray-200 pt-5 flex items-center gap-3">
                <Avatar naam={review.naam} />
                <div>
                  <p className="font-bold text-[var(--vakman-navy)] font-[family-name:var(--font-heading)]">{review.naam}</p>
                  <p className="text-gray-400 text-sm">{review.stad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <PlatformLogos />
      </div>
    </section>
  );
}
