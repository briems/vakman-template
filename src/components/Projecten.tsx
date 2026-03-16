"use client";

import { klantConfig } from "@/config/klant";
import { useState } from "react";
import { MapPin, Clock, Quote } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categorieen = ["Alles", "Lekkage", "Badkamer", "CV ketel", "Verstopping"];

export default function Projecten() {
  const [filter, setFilter] = useState("Alles");
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  const projecten =
    filter === "Alles"
      ? klantConfig.projecten
      : klantConfig.projecten.filter((p) => p.categorie === filter);

  return (
    <section id="projecten" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="text-[var(--vakman-primary)] font-bold text-sm uppercase tracking-widest mb-3 block">
            Ons werk
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--vakman-navy)] mb-5 font-[family-name:var(--font-heading)] leading-tight">
            Van probleem naar{" "}
            <span className="gradient-text">oplossing</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Sleep de slider om het verschil te zien. Echte projecten, echte resultaten.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categorieen.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? "bg-[var(--vakman-primary)] text-white shadow-lg shadow-[var(--vakman-primary)]/20"
                  : "bg-white text-gray-600 hover:text-[var(--vakman-navy)] border border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 stagger-children ${gridVisible ? "visible" : ""}`}
        >
          {projecten.map((project, index) => (
            <div
              key={`${project.titel}-${index}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[var(--vakman-primary)]/30 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Before/After slider */}
              <BeforeAfterSlider
                voorAfbeelding={project.voorAfbeelding}
                naAfbeelding={project.naAfbeelding}
                altVoor={`${project.titel} - voor`}
                altNa={`${project.titel} - na`}
              />

              {/* Project info */}
              <div className="p-5 md:p-7">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                  <span className="bg-[var(--vakman-primary)]/10 text-[var(--vakman-primary)] text-xs font-bold px-3 py-1 rounded-full">
                    {project.categorie}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs md:text-sm">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.locatie}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs md:text-sm">
                    <Clock className="h-3.5 w-3.5" />
                    {project.tijdsduur}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[var(--vakman-navy)] mb-3 font-[family-name:var(--font-heading)]">
                  {project.titel}
                </h3>

                {/* Client quote */}
                <div className="bg-gray-50 rounded-xl p-4 flex gap-3 border border-gray-100">
                  <Quote className="h-5 w-5 text-[var(--vakman-primary)] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600 text-sm italic leading-relaxed">
                      &ldquo;{project.quote}&rdquo;
                    </p>
                    <p className="text-gray-400 text-xs mt-2 font-semibold">
                      &mdash; {project.klantNaam}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projecten.length === 0 && (
          <p className="text-center text-gray-400 py-12 text-lg">
            Geen projecten gevonden in deze categorie.
          </p>
        )}
      </div>
    </section>
  );
}
