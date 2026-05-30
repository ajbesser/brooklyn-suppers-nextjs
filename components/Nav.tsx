"use client";

import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,246,238,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,31,22,0.08)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16" }}
          className="text-[18px] font-normal tracking-tight rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
        >
          Brooklyn Suppers
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "About", id: "about" },
            { label: "Expect", id: "expect" },
            { label: "Menus", id: "menus" },
          ].map(({ label, id }) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollTo(id)}
              style={{ fontFamily: "var(--font-newsreader)", color: "#574638" }}
              className="text-[16px] font-normal hover:text-[#2a1f16] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("save-a-seat")}
            style={{
              fontFamily: "var(--font-newsreader)",
              background: "#2a1f16",
              color: "#f4eee2",
            }}
            className="text-[16px] font-normal px-5 py-2 rounded-full hover:opacity-90 transition-opacity italic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
          >
            Hear first →
          </button>
        </nav>

        {/* Mobile: just the CTA */}
        <button
          type="button"
          onClick={() => scrollTo("save-a-seat")}
          style={{
            fontFamily: "var(--font-newsreader)",
            background: "#2a1f16",
            color: "#f4eee2",
          }}
          className="md:hidden text-[15px] font-normal px-4 py-2 rounded-full italic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
        >
          Hear first →
        </button>
      </div>
    </header>
  );
}
