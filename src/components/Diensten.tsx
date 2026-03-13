import { klantConfig } from "@/config/klant";
import { Phone } from "lucide-react";
import {
  Droplets,
  Wrench,
  ShowerHead,
  Grid3x3,
  CircleOff,
  PencilRuler,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Lekkages": <Droplets className="h-7 w-7" />,
  "Installatie sanitair": <PencilRuler className="h-7 w-7" />,
  "Badkamer renovatie": <ShowerHead className="h-7 w-7" />,
  "Tegelwerk": <Grid3x3 className="h-7 w-7" />,
  "Verstopping": <CircleOff className="h-7 w-7" />,
  "Loodgieter diensten": <Wrench className="h-7 w-7" />,
};

export default function Diensten() {
  return (
    <section id="diensten" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze diensten
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {klantConfig.bedrijfsnaam} helpt u met alle voorkomende klussen. Vakkundig en tegen een eerlijke prijs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {klantConfig.diensten.map((dienst, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100 hover:border-[var(--vakman-primary)] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-11 h-11 md:w-14 md:h-14 bg-orange-50 text-[var(--vakman-primary)] rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[var(--vakman-primary)] group-hover:text-white transition-colors duration-300">
                {iconMap[dienst.naam] || <Wrench className="h-7 w-7" />}
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-[var(--vakman-primary)] transition-colors">
                {dienst.naam}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {dienst.beschrijving}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <a
            href={`tel:${klantConfig.telefoonnummer}`}
            className="inline-flex items-center gap-2 bg-[var(--vakman-primary)] text-white px-5 md:px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-[var(--vakman-primary-dark)] transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline">Bel voor een afspraak: </span>{klantConfig.telefoonnummer}
          </a>
        </div>
      </div>
    </section>
  );
}
