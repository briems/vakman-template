import { klantConfig } from "@/config/klant";
import { MapPin } from "lucide-react";

export default function Werkgebied() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Werkgebied
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {klantConfig.bedrijfsnaam} is actief in <strong>{klantConfig.werkgebied}</strong>.
            Wij komen snel bij u langs, vaak nog dezelfde dag.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-[var(--vakman-primary)]" />
              <h3 className="text-2xl font-bold text-gray-900">{klantConfig.stad} e.o.</h3>
            </div>
            <p className="text-gray-600">
              Woont u in de regio {klantConfig.stad}? Neem gerust contact op voor een vrijblijvende offerte.
              Wij rekenen geen voorrijkosten binnen ons werkgebied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
