"use client";

import { klantConfig } from "@/config/klant";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Sterren({ aantal }: { aantal: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: aantal }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function Avatar({ naam }: { naam: string }) {
  const initialen = naam
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const kleuren = [
    "bg-orange-500",
    "bg-blue-500",
    "bg-emerald-500",
    "bg-violet-500",
    "bg-rose-500",
  ];
  const kleur = kleuren[naam.length % kleuren.length];

  return (
    <div
      className={`w-11 h-11 ${kleur} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
    >
      {initialen}
    </div>
  );
}

function useSlideIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function GoogleBadge() {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 md:px-8 py-5 md:py-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="text-gray-900 font-bold text-lg">Google Reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-gray-900">4.9</span>
          <Sterren aantal={5} />
        </div>
        <p className="text-gray-500 text-sm">Gebaseerd op 47 reviews</p>
      </div>
    </div>
  );
}

function PlatformLogos() {
  return (
    <div className="mt-10 md:mt-14 border-t border-gray-200 pt-8 md:pt-10">
      <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-wider mb-6">
        Zoals te zien op
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {/* Werkspot */}
        <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
            <rect width="32" height="32" rx="6" fill="#FF6600" />
            <text x="5" y="22" fontSize="14" fontWeight="bold" fill="white" fontFamily="Arial">W</text>
          </svg>
          <span className="text-gray-500 font-bold text-lg">Werkspot</span>
        </div>

        {/* Thuisklussen */}
        <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
            <rect width="32" height="32" rx="6" fill="#2B7A3E" />
            <text x="6" y="22" fontSize="14" fontWeight="bold" fill="white" fontFamily="Arial">T</text>
          </svg>
          <span className="text-gray-500 font-bold text-lg">Thuisklussen</span>
        </div>

        {/* Google */}
        <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 24 24" className="h-7 w-7">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="text-gray-500 font-bold text-lg">Google</span>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { ref, visible } = useSlideIn();

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wat klanten zeggen
          </h2>
          <p className="text-gray-600 text-lg">
            Lees de ervaringen van onze tevreden klanten
          </p>
        </div>

        <GoogleBadge />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {klantConfig.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : "translateY(30px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <Sterren aantal={review.sterren} />
              <p className="text-gray-700 mt-4 mb-5 leading-relaxed italic">
                &ldquo;{review.tekst}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <Avatar naam={review.naam} />
                <div>
                  <p className="font-semibold text-gray-900">{review.naam}</p>
                  <p className="text-gray-500 text-sm">{review.stad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <PlatformLogos />
      </div>
    </section>
  );
}
