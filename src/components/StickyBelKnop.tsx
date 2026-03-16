"use client";

import { klantConfig } from "@/config/klant";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyBelKnop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={`tel:${klantConfig.telefoonnummer}`}
        className="flex items-center justify-center gap-2.5 bg-[var(--vakman-primary)] text-white py-4 font-bold text-lg shadow-[0_-4px_20px_rgba(0,0,0,0.15)] cursor-pointer"
      >
        <Phone className="h-5 w-5" />
        Bel nu: {klantConfig.telefoonnummer}
      </a>
    </div>
  );
}
