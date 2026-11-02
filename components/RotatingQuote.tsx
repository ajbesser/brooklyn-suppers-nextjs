"use client";

import { useEffect, useState } from "react";

export function RotatingQuote({
  quotes,
  className = "",
  style = {},
}: {
  quotes: string[];
  className?: string;
  style?: React.CSSProperties;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: ReturnType<typeof setInterval> | undefined;
    let fade: ReturnType<typeof setTimeout> | undefined;
    const stop = () => { clearInterval(interval); clearTimeout(fade); };
    const start = () => {
      stop();
      if (paused || reduced.matches || quotes.length < 2) return;
      interval = setInterval(() => {
        setVisible(false);
        fade = setTimeout(() => { setIndex(i => (i + 1) % quotes.length); setVisible(true); }, 400);
      }, 5000);
    };
    const motionChanged = () => { setVisible(true); start(); };
    start();
    reduced.addEventListener("change", motionChanged);
    return () => { stop(); reduced.removeEventListener("change", motionChanged); };
  }, [quotes.length, paused]);

  return (
    <div><p
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      &ldquo;{quotes[index]}&rdquo;
    </p>
      {quotes.length > 1 && <button type="button" aria-pressed={paused} className="block mx-auto mt-6 px-3 py-2 min-h-11 underline text-[16px]" onClick={() => { setVisible(true); setPaused(p => !p); }}>{paused ? "Resume quotes" : "Pause quotes"}</button>}
    </div>
  );
}
