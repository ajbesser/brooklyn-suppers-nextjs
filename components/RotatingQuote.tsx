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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % quotes.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(id);
  }, [quotes.length]);

  return (
    <p
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      &ldquo;{quotes[index]}&rdquo;
    </p>
  );
}
