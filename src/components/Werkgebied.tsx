import { klantConfig } from "@/config/klant";

export default function Werkgebied() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Werkgebied
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {klantConfig.bedrijfsnaam} is actief in <strong>{klantConfig.werkgebied}</strong>.
            Wij komen snel bij u langs, vaak nog dezelfde dag.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[--primary]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
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
