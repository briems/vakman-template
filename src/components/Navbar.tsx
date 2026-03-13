"use client";

import { klantConfig } from "@/config/klant";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gray-900">
          {klantConfig.bedrijfsnaam}
        </a>

        <div className="hidden sm:flex items-center gap-6">
          <a href="#diensten" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            Diensten
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            Contact
          </a>
          <a
            href={`tel:${klantConfig.telefoonnummer}`}
            className="flex items-center gap-2 bg-[--primary] text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {klantConfig.telefoonnummer}
          </a>
        </div>

        <a
          href={`tel:${klantConfig.telefoonnummer}`}
          className="sm:hidden flex items-center gap-1 bg-[--primary] text-white px-3 py-2 rounded-md text-sm font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Bel nu
        </a>
      </div>
    </nav>
  );
}
