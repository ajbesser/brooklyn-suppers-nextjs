"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BrandWordmark } from "@/components/BrandWordmark";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Expect", id: "expect" },
  { label: "Menus", id: "menus" },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking — only on home page
  useEffect(() => {
    if (!isHome) return;
    const sectionIds = [...navLinks.map((l) => l.id), "save-a-seat"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    setMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:
          menuOpen || scrolled ? "rgba(250,246,238,0.97)" : "transparent",
        backdropFilter: menuOpen || scrolled ? "blur(8px)" : "none",
        borderBottom:
          menuOpen || scrolled
            ? "1px solid rgba(42,31,22,0.08)"
            : "1px solid transparent",
      }}
    >
      <div className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">
        <button
          type="button"
          onClick={scrollToTop}
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
        >
          <BrandWordmark compact />
        </button>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, id }) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "var(--font-newsreader)",
                color: isHome && activeSection === id ? "var(--color-dark)" : "var(--color-body)",
              }}
              className="text-[16px] font-normal hover:text-[#2a1f16] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
            >
              {label}
            </button>
          ))}
          <Link
            href="/dinners"
            style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)" }}
            className="text-[16px] font-normal hover:text-[#2a1f16] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
          >
            Past dinners
          </Link>
          <button
            type="button"
            onClick={() => scrollTo("save-a-seat")}
            style={{
              fontFamily: "var(--font-newsreader)",
              background: "var(--color-dark)",
              color: "var(--color-parchment)",
            }}
            className="text-[16px] font-normal px-5 py-2 rounded-full hover:opacity-90 transition-opacity italic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
          >
            Come over →
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTo("save-a-seat")}
            style={{
              fontFamily: "var(--font-newsreader)",
              background: "var(--color-dark)",
              color: "var(--color-parchment)",
            }}
            className="text-[15px] font-normal px-4 py-2 rounded-full italic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
          >
            Come over →
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf6ee]"
          >
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                background: "var(--color-dark)",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                background: "var(--color-dark)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                background: "var(--color-dark)",
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "380px" : "0",
          borderTop: menuOpen ? "1px solid rgba(42,31,22,0.08)" : "none",
        }}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col px-6 py-4"
        >
          {navLinks.map(({ label, id }, i) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "var(--font-newsreader)",
                color: isHome && activeSection === id ? "var(--color-dark)" : "var(--color-body)",
              }}
              className={`text-left text-[20px] py-3 font-normal hover:text-[#2a1f16] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] ${
                i < navLinks.length - 1 ? "border-b border-[rgba(42,31,22,0.08)]" : ""
              }`}
            >
              {label}
            </button>
          ))}
          <Link
            href="/dinners"
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)" }}
            className="text-left text-[20px] py-3 font-normal hover:text-[#2a1f16] transition-colors border-b border-[rgba(42,31,22,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33]"
          >
            Past dinners
          </Link>
          <button
            type="button"
            onClick={() => scrollTo("save-a-seat")}
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "var(--color-terracotta)",
            }}
            className="text-left text-[20px] py-3 font-normal italic hover:opacity-80 transition-opacity border-t border-[rgba(42,31,22,0.08)] mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33]"
          >
            Come over →
          </button>
        </nav>
      </div>
    </header>
  );
}
