"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ mobile = false }: { mobile?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    const update = () => {
      if (reduced.matches || desktop.matches === mobile) video.pause();
      else void video.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
    };
    update();
    reduced.addEventListener("change", update);
    desktop.addEventListener("change", update);
    return () => { reduced.removeEventListener("change", update); desktop.removeEventListener("change", update); video.pause(); };
  }, [mobile]);
  return <video ref={ref} controls loop muted playsInline preload="metadata" poster="/hero-poster.jpg" className="w-full h-full object-cover" aria-label="Guests around the table at a Brooklyn Supper">
    <source src="/hero-video.mp4" type="video/mp4" />
    Your browser cannot play this video. <a href="/hero-video.mp4">Watch the dinner video.</a>
  </video>;
}
