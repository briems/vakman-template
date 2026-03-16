"use client";

import { klantConfig } from "@/config/klant";
import { Phone, AlertTriangle, Clock, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SpoedCTA() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-28 bg-[var(--vakman-primary)] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-sm font-bold mb-8">
            <AlertTriangle className="h-4 w-4" />
            Spoedservice beschikbaar
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 font-[family-name:var(--font-heading)] leading-tight">
            Spoed? Wij zijn er voor u.
            <br />
            <span className="text-white/80">24 uur per dag, 7 dagen per week.</span>
          </h2>

          <p className="text-white/70 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Lekkage, verstopping of andere noodgevallen? Bel ons direct.
            Wij zijn er snel en rekenen geen voorrijkosten.
          </p>

          <a
            href={`tel:${klantConfig.telefoonnummer}`}
            className="inline-flex items-center gap-3 bg-white text-[var(--vakman-primary)] px-10 py-5 rounded-2xl text-2xl md:text-3xl font-extrabold hover:bg-gray-50 transition-colors shadow-2xl cursor-pointer font-[family-name:var(--font-heading)]"
          >
            <Phone className="h-7 w-7 md:h-8 md:w-8" />
            {klantConfig.telefoonnummer}
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Gemiddeld binnen 45 min ter plaatse</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Geen voorrijkosten</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
