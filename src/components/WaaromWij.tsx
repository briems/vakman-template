"use client";

import { klantConfig } from "@/config/klant";
import { Clock, BadgeEuro, Award, ClipboardCheck, Shield, ThumbsUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const usps = [
  {
    icoon: <Clock className="h-7 w-7" />,
    titel: "Snelle responstijden",
    beschrijving: "Snel ter plaatse wanneer u ons nodig heeft. Ook voor spoedklussen kunt u op ons rekenen.",
    highlight: "Vaak binnen 1 uur",
  },
  {
    icoon: <BadgeEuro className="h-7 w-7" />,
    titel: "Geen voorrijkosten",
    beschrijving: "U betaalt alleen voor het werk. Geen verborgen kosten of verrassingen achteraf.",
    highlight: "Transparante prijzen",
  },
  {
    icoon: <Award className="h-7 w-7" />,
    titel: `${klantConfig.jarenlange_ervaring} jaar ervaring`,
    beschrijving: `Ruim ${klantConfig.jarenlange_ervaring} jaar ervaring in het vak. Gecertificeerde vakmensen die kwaliteit leveren.`,
    highlight: "Kiwa gecertificeerd",
  },
  {
    icoon: <Shield className="h-7 w-7" />,
    titel: "Garantie op werk",
    beschrijving: "Wij staan achter ons werk. Op al onze werkzaamheden geven wij garantie.",
    highlight: "100% garantie",
  },
  {
    icoon: <ClipboardCheck className="h-7 w-7" />,
    titel: "Gratis offerte",
    beschrijving: "Vraag vrijblijvend een offerte aan. Wij komen graag langs voor een inspectie.",
    highlight: "Vrijblijvend",
  },
  {
    icoon: <ThumbsUp className="h-7 w-7" />,
    titel: "247+ tevreden klanten",
    beschrijving: "Onze klanten waarderen ons met een 4.9 op Google. Kwaliteit die voor zich spreekt.",
    highlight: "4.9 sterren",
  },
];

export default function WaaromWij() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.1);

  return (
    <section className="py-20 md:py-28 bg-[var(--vakman-navy)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="text-[var(--vakman-primary)] font-bold text-sm uppercase tracking-widest mb-3 block">
            Waarom wij
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 font-[family-name:var(--font-heading)] leading-tight">
            Waarom klanten kiezen voor{" "}
            <span className="gradient-text">{klantConfig.bedrijfsnaam}</span>
          </h2>
          <p className="text-white/50 text-lg">
            Klanttevredenheid is onze hoogste prioriteit. Dit is wat ons onderscheidt.
          </p>
        </div>

        {/* USPs grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger-children ${gridVisible ? "visible" : ""}`}
        >
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-[var(--vakman-primary)]/30 transition-all duration-300 cursor-default"
            >
              {/* Highlight badge */}
              <span className="absolute top-5 right-5 text-[var(--vakman-primary)] text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                {usp.highlight}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 bg-[var(--vakman-primary)]/15 text-[var(--vakman-primary)] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[var(--vakman-primary)] group-hover:text-white transition-all duration-300">
                {usp.icoon}
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
                {usp.titel}
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                {usp.beschrijving}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
