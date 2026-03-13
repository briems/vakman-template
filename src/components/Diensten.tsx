import { klantConfig } from "@/config/klant";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {klantConfig.diensten.map((dienst, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-[--primary] hover:shadow-md transition group"
            >
              <div className="text-4xl mb-4">{dienst.icoon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[--primary] transition">
                {dienst.naam}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {dienst.beschrijving}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`tel:${klantConfig.telefoonnummer}`}
            className="inline-flex items-center gap-2 bg-[--primary] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Bel voor een afspraak: {klantConfig.telefoonnummer}
          </a>
        </div>
      </div>
    </section>
  );
}
