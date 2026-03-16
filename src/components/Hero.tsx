"use client";

import { klantConfig } from "@/config/klant";
import { Phone, ArrowRight, Star, Shield, BadgeCheck, Clock, CheckCircle2 } from "lucide-react";
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

const trustBadges = [
  { icoon: <Shield className="h-5 w-5" />, tekst: "Kiwa gecertificeerd" },
  { icoon: <BadgeCheck className="h-5 w-5" />, tekst: "Erkend installateur" },
  { icoon: <Clock className="h-5 w-5" />, tekst: "24/7 bereikbaar" },
];

const stats = [
  { waarde: 247, suffix: "+", label: "Tevreden klanten" },
  { waarde: 25, suffix: "+", label: "Jaar ervaring" },
  { waarde: 4.9, suffix: "", label: "Beoordeling", isStar: true },
];

const problemPoints = [
  "Lekkage ontdekt en spoed nodig?",
  "Badkamer toe aan een upgrade?",
  "Verstopping die niet weg wil?",
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[var(--vakman-navy)] text-white overflow-hidden">
      {/* Poster fallback image for mobile / slow connections */}
      <img
        src="/images/hero-fallback.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Video background — hidden on mobile to save bandwidth */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-fallback.jpg"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[var(--vakman-navy)]/60" />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--vakman-navy)]/40 via-transparent to-[var(--vakman-navy)]/80" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--vakman-navy)] to-transparent" />

      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--vakman-primary)]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--vakman-primary)]/15 border border-[var(--vakman-primary)]/30 text-[var(--vakman-primary)] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--vakman-primary)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--vakman-primary)]" />
              </span>
              {klantConfig.jarenlange_ervaring} jaar vakmanschap in {klantConfig.stad}
            </div>

            {/* Problem statement - storytelling */}
            <div className="mb-6 space-y-2">
              {problemPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm md:text-base">
                  <CheckCircle2 className="h-4 w-4 text-[var(--vakman-primary)] shrink-0" />
                  {point}
                </div>
              ))}
            </div>

            {/* Solution headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6 font-[family-name:var(--font-heading)] tracking-tight">
              Wij lossen het op.{" "}
              <span className="gradient-text">Gegarandeerd.</span>
            </h1>

            <p className="text-base md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
              {klantConfig.bedrijfsnaam} — uw{" "}
              <span className="text-white font-semibold">gecertificeerde vakman</span>{" "}
              in {klantConfig.werkgebied}. Eerlijke prijzen, geen verrassingen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8">
              <a
                href={`tel:${klantConfig.telefoonnummer}`}
                className="hero-pulse-btn inline-flex items-center justify-center gap-2.5 bg-[var(--vakman-primary)] text-white px-7 md:px-9 py-4 md:py-5 rounded-xl text-base md:text-lg font-bold hover:bg-[var(--vakman-primary-dark)] transition-colors cursor-pointer shadow-lg shadow-[var(--vakman-primary)]/25"
              >
                <Phone className="h-5 w-5" />
                Bel nu — gratis advies
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm text-white px-7 md:px-9 py-4 md:py-5 rounded-xl text-base md:text-lg font-bold hover:bg-white/20 transition-all duration-200 border border-white/20 cursor-pointer"
              >
                Gratis offerte
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-xs md:text-sm text-white/80"
                >
                  <span className="text-[var(--vakman-primary)]">{badge.icoon}</span>
                  {badge.tekst}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 lg:p-7 text-center hover:bg-white/10 transition-all duration-300 hover:border-[var(--vakman-primary)]/30 cursor-default group"
                >
                  <div className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[var(--vakman-primary)] mb-1 flex items-center justify-center gap-1 lg:gap-2 stat-glow font-[family-name:var(--font-heading)]">
                    {stat.isStar ? (
                      <>
                        <AnimatedCounter end={4} suffix="" duration={1500} />
                        <span className="text-xl lg:text-3xl">.</span>
                        <AnimatedCounter end={9} suffix="" duration={2000} />
                        <Star className="h-5 w-5 lg:h-8 lg:w-8 fill-yellow-400 text-yellow-400" />
                      </>
                    ) : (
                      <AnimatedCounter end={stat.waarde as number} suffix={stat.suffix} duration={2000} />
                    )}
                  </div>
                  <div className="text-white/50 text-xs lg:text-sm font-semibold uppercase tracking-widest group-hover:text-white/70 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
