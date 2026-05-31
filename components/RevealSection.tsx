"use client";

import { useEffect, useRef, useState } from "react";

type AnimState = "visible" | "hidden" | "animating";

export function RevealSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible — SSR output and crawlers always see the content
  const [state, setState] = useState<AnimState>("visible");

  useEffect(() => {
    // Respect user's motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    // Only animate elements that start below the visible viewport
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight) return;

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("animating");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isHidden = state === "hidden";

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: isHidden ? "none" : "opacity, transform",
        transitionDelay: state === "animating" ? `${delay}ms` : "0ms",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        opacity: 1,
        transform: isHidden ? "translateY(18px)" : "none",
      }}
    >
      {children}
    </div>
  );
}
