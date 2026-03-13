"use client";

import { klantConfig } from "@/config/klant";
import { useState } from "react";
import { MapPin, Clock, Quote } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/before-after-slider";

const categorieen = ["Alles", "Lekkage", "Badkamer", "CV ketel", "Verstopping"];

export default function Projecten() {
  const [filter, setFilter] = useState("Alles");

  const projecten =
    filter === "Alles"
      ? klantConfig.projecten
      : klantConfig.projecten.filter((p) => p.categorie === filter);

  return (
    <section id="projecten" className="py-16 md:py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Onze projecten
          </h2>
          <p className="text-gray-400 text-lg">
            Sleep de slider om het verschil te zien tussen voor en na
          </p>
        </div>

        {/* Filter knoppen */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-8 md:mb-10">
          {categorieen.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-[var(--vakman-primary)] text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projecten grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {projecten.map((project, index) => (
            <div
              key={`${project.titel}-${index}`}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
            >
              {/* Before/After slider */}
              <BeforeAfterSlider
                voorAfbeelding={project.voorAfbeelding}
                naAfbeelding={project.naAfbeelding}
                altVoor={`${project.titel} - voor`}
                altNa={`${project.titel} - na`}
              />

              {/* Project info */}
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3">
                  <span className="bg-[var(--vakman-primary)]/20 text-[var(--vakman-primary)] text-xs font-semibold px-2.5 py-1 rounded-full">
                    {project.categorie}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs md:text-sm">
                    <MapPin className="h-3 w-3 md:h-3.5 md:w-3.5" />
                    {project.locatie}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs md:text-sm">
                    <Clock className="h-3 w-3 md:h-3.5 md:w-3.5" />
                    {project.tijdsduur}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3">{project.titel}</h3>

                {/* Klant quote */}
                <div className="bg-gray-800 rounded-xl p-3 md:p-4 flex gap-3">
                  <Quote className="h-5 w-5 text-[var(--vakman-primary)] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      &ldquo;{project.quote}&rdquo;
                    </p>
                    <p className="text-gray-500 text-xs mt-2 font-medium">
                      &mdash; {project.klantNaam}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projecten.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            Geen projecten gevonden in deze categorie.
          </p>
        )}
      </div>
    </section>
  );
}
