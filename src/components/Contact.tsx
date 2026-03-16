"use client";

import { klantConfig } from "@/config/klant";
import { useState } from "react";
import { Send, Phone, MessageCircle, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { ref, visible } = useScrollReveal();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          naam: formData.get("naam"),
          email: formData.get("email"),
          telefoon: formData.get("telefoon"),
          bericht: formData.get("bericht"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: info */}
            <div className="lg:py-8">
              <span className="text-[var(--vakman-primary)] font-bold text-sm uppercase tracking-widest mb-3 block">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--vakman-navy)] mb-5 font-[family-name:var(--font-heading)] leading-tight">
                Neem vandaag nog{" "}
                <span className="gradient-text">contact op</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Vul het formulier in voor een gratis en vrijblijvende offerte. Of neem direct telefonisch contact op.
              </p>

              {/* Response time */}
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-5 py-3 text-sm text-green-800 font-medium mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                Gemiddeld binnen 23 minuten reactie
              </div>

              {/* Contact options */}
              <div className="space-y-4">
                <a
                  href={`tel:${klantConfig.telefoonnummer}`}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[var(--vakman-primary)]/30 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-[var(--vakman-primary)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--vakman-primary)] transition-colors">
                    <Phone className="h-5 w-5 text-[var(--vakman-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--vakman-navy)] font-[family-name:var(--font-heading)]">Bel ons direct</p>
                    <p className="text-[var(--vakman-primary)] font-semibold">{klantConfig.telefoonnummer}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${klantConfig.whatsappNummer}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="h-5 w-5 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--vakman-navy)] font-[family-name:var(--font-heading)]">WhatsApp bericht</p>
                    <p className="text-green-600 font-semibold">Direct chatten</p>
                  </div>
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>Uw gegevens worden veilig verwerkt en nooit gedeeld</span>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100">
              <h3 className="text-xl font-bold text-[var(--vakman-navy)] mb-6 font-[family-name:var(--font-heading)]">
                Gratis offerte aanvragen
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="naam" className="block text-sm font-semibold text-[var(--vakman-navy)] mb-1.5">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--vakman-primary)] focus:border-transparent text-[var(--vakman-navy)] placeholder:text-gray-400"
                    placeholder="Uw volledige naam"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--vakman-navy)] mb-1.5">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--vakman-primary)] focus:border-transparent text-[var(--vakman-navy)] placeholder:text-gray-400"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="block text-sm font-semibold text-[var(--vakman-navy)] mb-1.5">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--vakman-primary)] focus:border-transparent text-[var(--vakman-navy)] placeholder:text-gray-400"
                      placeholder="06-12345678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bericht" className="block text-sm font-semibold text-[var(--vakman-navy)] mb-1.5">
                    Bericht *
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--vakman-primary)] focus:border-transparent resize-none text-[var(--vakman-navy)] placeholder:text-gray-400"
                    placeholder="Beschrijf uw situatie of klus..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2.5 bg-[var(--vakman-primary)] text-white py-4 rounded-xl font-bold text-lg hover:bg-[var(--vakman-primary-dark)] transition-colors disabled:opacity-50 cursor-pointer shadow-lg shadow-[var(--vakman-primary)]/20"
                >
                  <Send className="h-5 w-5" />
                  {status === "loading" ? "Verzenden..." : "Verstuur bericht"}
                </button>

                {status === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-xl text-center font-medium">
                    Bedankt! Uw bericht is verstuurd. Wij nemen zo snel mogelijk contact met u op.
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-xl text-center">
                    Er is iets misgegaan. Probeer het opnieuw of bel ons op {klantConfig.telefoonnummer}.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
