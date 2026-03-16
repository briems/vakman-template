"use client";

import { klantConfig } from "@/config/klant";
import { Phone, ArrowRight } from "lucide-react";
import {
  Droplets,
  Wrench,
  ShowerHead,
  Grid3x3,
  CircleOff,
  PencilRuler,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  "Lekkages": <Droplets className="h-7 w-7" />,
  "Installatie sanitair": <PencilRuler className="h-7 w-7" />,
  "Badkamer renovatie": <ShowerHead className="h-7 w-7" />,
  "Tegelwerk": <Grid3x3 className="h-7 w-7" />,
  "Verstopping": <CircleOff className="h-7 w-7" />,
  "Loodgieter diensten": <Wrench className="h-7 w-7" />,
};

export default function Diensten() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.1);

  return (
    <section id="diensten" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="text-[var(--vakman-primary)] font-bold text-sm uppercase tracking-widest mb-3 block">
            Onze expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--vakman-navy)] mb-5 font-[family-name:var(--font-heading)] leading-tight">
            Alles onder één dak.{" "}
            <span className="text-gray-400">Van lekkage tot renovatie.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {klantConfig.bedrijfsnaam} helpt u met alle voorkomende klussen. Vakkundig, snel en tegen een eerlijke prijs.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger-children ${gridVisible ? "visible" : ""}`}
        >
          {klantConfig.diensten.map((dienst, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-[var(--vakman-primary)]/30 hover:shadow-xl hover:shadow-[var(--vakman-primary)]/5 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[var(--vakman-primary)]/10 text-[var(--vakman-primary)] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[var(--vakman-primary)] group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[var(--vakman-primary)]/20">
                {iconMap[dienst.naam] || <Wrench className="h-7 w-7" />}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--vakman-navy)] mb-2 font-[family-name:var(--font-heading)] group-hover:text-[var(--vakman-primary)] transition-colors">
                {dienst.naam}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                {dienst.beschrijving}
              </p>

              {/* Arrow link */}
              <div className="flex items-center gap-1.5 text-[var(--vakman-primary)] text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Meer info
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={`tel:${klantConfig.telefoonnummer}`}
            className="inline-flex items-center gap-2.5 bg-[var(--vakman-navy)] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[var(--vakman-navy-light)] transition-colors cursor-pointer shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Bel voor een afspraak: {klantConfig.telefoonnummer}
          </a>
        </div>
      </div>
    </section>
  );
}
