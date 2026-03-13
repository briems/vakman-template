import { klantConfig } from "@/config/klant";
import { Clock, BadgeEuro, Award, ClipboardCheck } from "lucide-react";

const usps = [
  {
    icoon: <Clock className="h-8 w-8" />,
    titel: "Snelle responstijden",
    beschrijving: "Snel ter plaatse wanneer u ons nodig heeft. Ook voor spoedklussen kunt u op ons rekenen.",
  },
  {
    icoon: <BadgeEuro className="h-8 w-8" />,
    titel: "Geen voorrijkosten",
    beschrijving: "U betaalt alleen voor het werk. Geen verborgen kosten of verrassingen achteraf.",
  },
  {
    icoon: <Award className="h-8 w-8" />,
    titel: `${klantConfig.jarenlange_ervaring} jaar ervaring`,
    beschrijving: "Ruim 25 jaar ervaring in het vak. Gecertificeerde vakmensen die kwaliteit leveren.",
  },
  {
    icoon: <ClipboardCheck className="h-8 w-8" />,
    titel: "Gratis offerte",
    beschrijving: "Vraag vrijblijvend een offerte aan. Wij komen graag langs voor een inspectie.",
  },
];

export default function WaaromWij() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Waarom kiezen voor {klantConfig.bedrijfsnaam}?
          </h2>
          <p className="text-gray-600 text-lg">
            Klanttevredenheid is onze hoogste prioriteit.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {usps.map((usp, index) => (
            <div key={index} className="bg-white rounded-xl p-4 md:p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-orange-50 text-[var(--vakman-primary)] rounded-2xl mb-3 md:mb-4">
                {usp.icoon}
              </div>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{usp.titel}</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{usp.beschrijving}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
