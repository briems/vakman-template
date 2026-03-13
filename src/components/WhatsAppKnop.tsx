"use client";

import { klantConfig } from "@/config/klant";
import { MessageCircle } from "lucide-react";

export default function WhatsAppKnop() {
  return (
    <a
      href={`https://wa.me/${klantConfig.whatsappNummer}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur een WhatsApp bericht"
      className="fixed bottom-[4.5rem] sm:bottom-6 right-4 sm:right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
      <span className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <MessageCircle className="h-6 w-6 text-white" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        WhatsApp ons
      </span>
    </a>
  );
}
