"use client";

import { klantConfig } from "@/config/klant";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { id: "diensten", label: "Diensten" },
  { id: "projecten", label: "Projecten" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--vakman-navy)]/95 backdrop-blur-md shadow-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 group"
        >
          <Image
            src="/images/logo-icon.png"
            alt={`${klantConfig.bedrijfsnaam} logo`}
            width={40}
            height={40}
            className="rounded-xl transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)] hidden sm:block">
            {klantConfig.bedrijfsnaam}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${klantConfig.telefoonnummer}`}
            className="ml-4 flex items-center gap-2 bg-[var(--vakman-primary)] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--vakman-primary-dark)] transition-colors duration-200 cursor-pointer"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">{klantConfig.telefoonnummer}</span>
            <span className="lg:hidden">Bel ons</span>
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <a
            href={`tel:${klantConfig.telefoonnummer}`}
            className="flex items-center gap-2 bg-[var(--vakman-primary)] text-white px-4 py-2 rounded-lg text-sm font-bold cursor-pointer"
          >
            <Phone className="h-4 w-4" />
            Bel nu
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 cursor-pointer"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[var(--vakman-navy)]/98 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
