import { klantConfig } from "@/config/klant";
import { Phone, AlertTriangle } from "lucide-react";

export default function SpoedCTA() {
  return (
    <section className="bg-[var(--vakman-primary)] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
          <AlertTriangle className="h-4 w-4" />
          Spoedservice
        </div>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Spoed? Wij zijn 24/7 bereikbaar
        </h2>

        <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
          Lekkage, verstopping of andere noodgevallen? Bel ons direct.
          Wij zijn er snel en rekenen geen voorrijkosten.
        </p>

        <a
          href={`tel:${klantConfig.telefoonnummer}`}
          className="inline-flex items-center gap-2 md:gap-3 bg-white text-[var(--vakman-primary)] px-6 md:px-10 py-4 md:py-5 rounded-xl text-xl md:text-3xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
        >
          <Phone className="h-6 w-6 md:h-8 md:w-8" />
          {klantConfig.telefoonnummer}
        </a>
      </div>
    </section>
  );
}
