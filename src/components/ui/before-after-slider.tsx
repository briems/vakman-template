"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  voorAfbeelding: string;
  naAfbeelding: string;
  altVoor?: string;
  altNa?: string;
}

export default function BeforeAfterSlider({
  voorAfbeelding,
  naAfbeelding,
  altVoor = "Voor",
  altNa = "Na",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handleMouseDown = () => {
    dragging.current = true;
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Na (achtergrond, volledige breedte) */}
      <Image
        src={naAfbeelding}
        alt={altNa}
        fill
        className="object-cover"
        draggable={false}
      />

      {/* Voor (gecropt op basis van slider positie) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src={voorAfbeelding}
          alt={altVoor}
          fill
          className="object-cover"
          style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
          draggable={false}
        />
      </div>

      {/* Scheidslijn */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-gray-700"
          >
            <path
              d="M6 4L2 10L6 16M14 4L18 10L14 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">
        VOOR
      </div>
      <div className="absolute top-3 right-3 bg-[var(--vakman-primary)] text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">
        NA
      </div>
    </div>
  );
}
