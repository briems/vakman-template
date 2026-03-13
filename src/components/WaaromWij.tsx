const usps = [
  {
    icoon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titel: "24/7 Beschikbaar",
    beschrijving: "Dag en nacht bereikbaar voor spoedklussen. Ook in het weekend en op feestdagen.",
  },
  {
    icoon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titel: "Geen voorrijkosten",
    beschrijving: "U betaalt alleen voor het werk. Geen verborgen kosten of verrassingen achteraf.",
  },
  {
    icoon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    titel: "19 jaar ervaring",
    beschrijving: "Ruim 19 jaar ervaring in het vak. Wij weten wat we doen en leveren kwaliteit.",
  },
  {
    icoon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
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
            Waarom kiezen voor ons?
          </h2>
          <p className="text-gray-600 text-lg">
            Betrouwbaar, snel en vakkundig. Daar staan wij voor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 text-[--primary] rounded-full mb-4">
                {usp.icoon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{usp.titel}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{usp.beschrijving}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
