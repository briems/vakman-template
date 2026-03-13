"use client";

import { klantConfig } from "@/config/klant";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact opnemen
            </h2>
            <p className="text-gray-600 text-lg">
              Vul het formulier in voor een gratis offerte. Wij reageren binnen 24 uur.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
                Naam *
              </label>
              <input
                type="text"
                id="naam"
                name="naam"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent text-gray-900"
                placeholder="Uw volledige naam"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent text-gray-900"
                  placeholder="uw@email.nl"
                />
              </div>
              <div>
                <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="telefoon"
                  name="telefoon"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent text-gray-900"
                  placeholder="06-12345678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1">
                Bericht *
              </label>
              <textarea
                id="bericht"
                name="bericht"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent resize-none text-gray-900"
                placeholder="Beschrijf uw situatie of klus..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[--primary] text-white py-4 rounded-md font-bold text-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {status === "loading" ? "Verzenden..." : "Verstuur bericht"}
            </button>

            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md text-center">
                Bedankt! Uw bericht is verstuurd. Wij nemen zo snel mogelijk contact met u op.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-center">
                Er is iets misgegaan. Probeer het opnieuw of bel ons op {klantConfig.telefoonnummer}.
              </div>
            )}
          </form>

          <div className="mt-8 text-center text-gray-500 text-sm">
            Of bel direct:{" "}
            <a href={`tel:${klantConfig.telefoonnummer}`} className="text-[--primary] font-semibold">
              {klantConfig.telefoonnummer}
            </a>{" "}
            | WhatsApp:{" "}
            <a
              href={`https://wa.me/${klantConfig.whatsappNummer}`}
              className="text-[--primary] font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stuur een bericht
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
