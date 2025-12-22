"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  speed?: number;            /* durasi loop (detik) */
  className?: string;
  children: React.ReactNode; /* SATU SET item */
};

export default function GsapMarquee({
  speed = 20,
  className = "",
  children,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      const width = track.scrollWidth / 2; // satu set
      gsap.fromTo(
        track,
        { x: "100%" },                // start dari kanan layar
        {
          x: -width,                  // keluar ke kiri sejauh satu set
          duration: speed,
          ease: "none",
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div ref={trackRef} className="flex w-max gap-12">
        {children}
        {children} {/* duplikasi untuk seamless */}
      </div>
    </div>
  );
}
