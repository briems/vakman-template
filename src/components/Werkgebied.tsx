"use client";

import { klantConfig } from "@/config/klant";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const voordelen = [
  "Geen voorrijkosten binnen werkgebied",
  "Vaak dezelfde dag nog ter plaatse",
  "24/7 bereikbaar voor spoed",
  "Gratis offerte aan huis",
];

export default function Werkgebied() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
        >
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: info */}
              <div className="p-8 md:p-12 lg:p-16">
                <span className="text-[var(--vakman-primary)] font-bold text-sm uppercase tracking-widest mb-3 block">
                  Werkgebied
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--vakman-navy)] mb-4 font-[family-name:var(--font-heading)] leading-tight">
                  Actief in {klantConfig.stad} en omstreken
                </h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                  {klantConfig.bedrijfsnaam} is actief in <strong className="text-[var(--vakman-navy)]">{klantConfig.werkgebied}</strong>.
                  Wij komen snel bij u langs, vaak nog dezelfde dag.
                </p>

                <div className="space-y-3 mb-8">
                  {voordelen.map((voordeel, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--vakman-primary)] shrink-0" />
                      <span className="text-[var(--vakman-navy)] font-medium">{voordeel}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`tel:${klantConfig.telefoonnummer}`}
                  className="inline-flex items-center gap-2.5 bg-[var(--vakman-primary)] text-white px-7 py-4 rounded-xl font-bold hover:bg-[var(--vakman-primary-dark)] transition-colors cursor-pointer shadow-lg shadow-[var(--vakman-primary)]/20"
                >
                  <Phone className="h-5 w-5" />
                  Bel voor een afspraak
                </a>
              </div>

              {/* Right: visual card */}
              <div className="bg-[var(--vakman-navy)] p-8 md:p-12 lg:p-16 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-16 w-16 text-[var(--vakman-primary)] mx-auto mb-6" />
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-3 font-[family-name:var(--font-heading)]">
                    {klantConfig.stad} e.o.
                  </h3>
                  <p className="text-white/50 text-lg mb-8">
                    {klantConfig.werkgebied}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[var(--vakman-primary)]">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">Gemiddeld binnen 45 min ter plaatse</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
