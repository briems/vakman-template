import { klantConfig } from "@/config/klant";

const reviews = [
  {
    naam: "Jan de Vries",
    stad: klantConfig.stad,
    sterren: 5,
    tekst: "Binnen een uur was de monteur ter plaatse en was het probleem verholpen. Zeer tevreden met de service en de prijs was eerlijk.",
  },
  {
    naam: "Maria Jansen",
    stad: klantConfig.stad,
    sterren: 5,
    tekst: "Onze badkamer is prachtig geworden. Van begin tot eind goed gecommuniceerd. Echte vakmensen die weten waar ze mee bezig zijn.",
  },
  {
    naam: "Peter Bakker",
    stad: klantConfig.stad,
    sterren: 5,
    tekst: "Al jaren onze vaste loodgieter. Altijd betrouwbaar, komt afspraken na en levert kwaliteitswerk. Aanrader!",
  },
];

function Sterren({ aantal }: { aantal: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: aantal }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wat klanten zeggen
          </h2>
          <p className="text-gray-600 text-lg">
            Lees de ervaringen van onze tevreden klanten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <Sterren aantal={review.sterren} />
              <p className="text-gray-700 mt-4 mb-4 leading-relaxed italic">
                &ldquo;{review.tekst}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{review.naam}</p>
                <p className="text-gray-500 text-sm">{review.stad}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
