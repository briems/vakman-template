"use client";

import { klantConfig } from "@/config/klant";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--vakman-primary)] shadow-lg border-b border-orange-700"
          : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          className={`text-base md:text-xl font-bold transition-colors whitespace-nowrap ${
            scrolled ? "text-white" : "text-gray-900"
          }`}
        >
          {klantConfig.bedrijfsnaam}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {["diensten", "projecten", "reviews", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium transition-colors capitalize ${
                scrolled
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {id}
            </a>
          ))}
          <a
            href={`tel:${klantConfig.telefoonnummer}`}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              scrolled
                ? "bg-white text-[var(--vakman-primary)] hover:bg-gray-100"
                : "bg-[var(--vakman-primary)] text-white hover:bg-[var(--vakman-primary-dark)]"
            }`}
          >
            <Phone className="h-4 w-4" />
            {scrolled ? "Bel nu: gratis advies" : klantConfig.telefoonnummer}
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-1.5 transition-colors ${scrolled ? "text-white" : "text-gray-700"}`}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden border-t px-4 py-4 space-y-3 ${
            scrolled
              ? "border-orange-700 bg-[var(--vakman-primary)]"
              : "border-gray-100 bg-white"
          }`}
        >
          {["diensten", "projecten", "reviews", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`block font-medium py-2 capitalize ${
                scrolled ? "text-white/90" : "text-gray-700"
              }`}
            >
              {id}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
