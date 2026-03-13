"use client";

import { klantConfig } from "@/config/klant";
import { Phone, ArrowRight, Star, Shield, BadgeCheck, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function WaterDrops() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <svg
          key={i}
          className="hero-drop absolute text-[var(--vakman-primary)]"
          style={{
            left: `${15 + i * 15}%`,
            animationDelay: `${i * 1.2}s`,
            opacity: 0.07 + i * 0.01,
          }}
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="currentColor"
        >
          <path d="M12 0C12 0 2 14 2 21a10 10 0 0020 0C22 14 12 0 12 0z" />
        </svg>
      ))}

      <svg className="absolute top-1/4 right-[8%] text-white/[0.04] hero-pipe" width="120" height="200" viewBox="0 0 120 200" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M60 0 L60 60 Q60 80 80 80 L120 80" />
        <path d="M60 60 Q60 80 40 80 L0 80" />
        <path d="M60 80 L60 140 Q60 160 80 160 L100 160" />
        <circle cx="60" cy="180" r="12" strokeWidth="3" />
        <path d="M54 176 L66 184 M54 184 L66 176" />
      </svg>

      <svg className="absolute bottom-1/4 right-[15%] text-white/[0.03] hero-pipe-2" width="80" height="160" viewBox="0 0 80 160" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M40 0 L40 50 Q40 70 60 70 L80 70" />
        <path d="M40 50 L40 110 Q40 130 20 130 L0 130" />
        <circle cx="40" cy="150" r="8" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

const trustBadges = [
  { icoon: <Shield className="h-5 w-5" />, tekst: "Kiwa gecertificeerd" },
  { icoon: <BadgeCheck className="h-5 w-5" />, tekst: "Erkend installateur" },
  { icoon: <Clock className="h-5 w-5" />, tekst: "24/7 bereikbaar" },
];

const stats = [
  { waarde: 247, suffix: "+", label: "Tevreden klanten" },
  { waarde: 19, suffix: "", label: "Jaar ervaring" },
  { waarde: 4.9, suffix: "", label: "Beoordeling", isStar: true },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center bg-gray-900 text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50 md:from-gray-900/80 md:via-gray-900/60 md:to-transparent" />

      <WaterDrops />

      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[var(--vakman-primary)] text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-4 md:mb-6 tracking-wide uppercase">
              {klantConfig.jarenlange_ervaring} jaar ervaring in {klantConfig.stad}
            </div>

            <h1 className="text-[1.75rem] md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3 md:mb-6">
              {klantConfig.tagline}
            </h1>

            <p className="text-sm md:text-xl text-gray-300 mb-5 md:mb-10 leading-relaxed">
              {klantConfig.bedrijfsnaam} is uw betrouwbare loodgieter in{" "}
              {klantConfig.stad}. Persoonlijke aanpak, eerlijke prijzen en
              vakmanschap waar u op kunt rekenen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-5 md:mb-10">
              <a
                href={`tel:${klantConfig.telefoonnummer}`}
                className="hero-pulse-btn inline-flex items-center justify-center gap-2 bg-[var(--vakman-primary)] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-[var(--vakman-primary-dark)] transition-colors"
              >
                <Phone className="h-5 w-5" />
                Bel nu direct
              </a>
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-white/20 transition-colors border border-white/20"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="hidden sm:flex flex-wrap items-center gap-2 md:gap-4">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-gray-200"
                >
                  <span className="text-[var(--vakman-primary)]">{badge.icoon}</span>
                  {badge.tekst}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-1 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[var(--vakman-primary)] mb-1 flex items-center justify-center gap-2">
                    {stat.isStar ? (
                      <>
                        <AnimatedCounter end={4} suffix="" duration={1500} />
                        <span>.</span>
                        <AnimatedCounter end={9} suffix="" duration={2000} />
                        <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                      </>
                    ) : (
                      <AnimatedCounter end={stat.waarde as number} suffix={stat.suffix} duration={2000} />
                    )}
                  </div>
                  <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-3 gap-2 mt-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center"
            >
              <div className="text-xl font-bold text-[var(--vakman-primary)] flex items-center justify-center gap-1">
                {stat.isStar ? (
                  <>
                    4.9
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </>
                ) : (
                  <AnimatedCounter end={stat.waarde as number} suffix={stat.suffix} duration={2000} />
                )}
              </div>
              <div className="text-gray-400 text-xs font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
