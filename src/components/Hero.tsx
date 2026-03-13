import { klantConfig } from "@/config/klant";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70" />

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-block bg-[--primary] text-white text-sm font-semibold px-3 py-1 rounded mb-6">
            24/7 Bereikbaar in {klantConfig.stad}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Uw betrouwbare{" "}
            <span className="text-[--primary]">vakman</span> in {klantConfig.stad}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Snel, vakkundig en eerlijk. {klantConfig.bedrijfsnaam} staat klaar voor al uw klussen.
            Geen voorrijkosten en altijd een eerlijke prijs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${klantConfig.telefoonnummer}`}
              className="inline-flex items-center justify-center gap-2 bg-[--primary] text-white px-8 py-4 rounded-md text-lg font-bold hover:opacity-90 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Bel nu direct
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-100 transition"
            >
              Gratis offerte aanvragen
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Geen voorrijkosten
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Binnen 1 uur ter plaatse
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
