"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BrandWordmark } from "@/components/BrandWordmark";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Expect", id: "expect" },
  { label: "Menus", id: "menus" },
  { label: "Contact", id: "contact" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const menuButtonRef = useRef<HTMLButtonElement>(null);
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

  return (
    <header
      className={`${isHome && !scrolled && !menuOpen ? "on-green" : ""} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        background:
          menuOpen || scrolled ? "rgba(237,240,230,0.97)" : "transparent",
        backdropFilter: menuOpen || scrolled ? "blur(8px)" : "none",
        borderBottom:
          menuOpen || scrolled
            ? "1px solid rgba(22,36,29,0.08)"
            : "1px solid transparent",
      }}
    >
      <div className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Brooklyn Suppers home"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fafaf5]"
        >
          <BrandWordmark compact />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, id }) => (
            <Link
              key={id}
              href={id === "about" || id === "contact" ? `/${id}` : `/#${id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === `/${id}` ? "page" : undefined}
              style={{
                fontFamily: "var(--font-newsreader)",
                color: isHome && activeSection === id ? "var(--color-dark)" : "var(--color-body)",
              }}
              className="text-[16px] font-normal hover:text-[var(--color-dark)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fafaf5]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/dinners"
            style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)" }}
            className="text-[16px] font-normal hover:text-[var(--color-dark)] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fafaf5]"
          >
            Past dinners
          </Link>
          <Link
            href="/#save-a-seat"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-newsreader)",
              background: "var(--btn-bg)",
              color: "var(--btn-fg)",
            }}
            className="text-[16px] font-normal px-5 py-2 rounded-full hover:opacity-90 transition-opacity italic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fafaf5]"
          >
            Come over →
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="/#save-a-seat"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-newsreader)",
              background: "var(--btn-bg)",
              color: "var(--btn-fg)",
            }}
            className="hidden min-[360px]:inline-flex text-[15px] font-normal px-4 py-2 rounded-full italic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fafaf5]"
          >
            Come over →
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            ref={menuButtonRef}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf5]"
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
        id="mobile-navigation"
        hidden={!menuOpen}
        inert={!menuOpen}
        onKeyDown={(event) => { if (event.key === "Escape") { setMenuOpen(false); menuButtonRef.current?.focus(); } }}
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "380px" : "0",
          borderTop: menuOpen ? "1px solid rgba(22,36,29,0.08)" : "none",
        }}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col px-6 py-4"
        >
          {navLinks.map(({ label, id }, i) => (
            <Link
              key={id}
              href={id === "about" || id === "contact" ? `/${id}` : `/#${id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === `/${id}` ? "page" : undefined}
              style={{
                fontFamily: "var(--font-newsreader)",
                color: isHome && activeSection === id ? "var(--color-dark)" : "var(--color-body)",
              }}
              className={`text-left text-[20px] py-3 font-normal hover:text-[var(--color-dark)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] ${
                i < navLinks.length - 1 ? "border-b border-[rgba(22,36,29,0.08)]" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/dinners"
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)" }}
            className="text-left text-[20px] py-3 font-normal hover:text-[var(--color-dark)] transition-colors border-b border-[rgba(22,36,29,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)]"
          >
            Past dinners
          </Link>
          <Link
            href="/#save-a-seat"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "var(--color-terracotta)",
            }}
            className="text-left text-[20px] py-3 font-normal italic hover:opacity-80 transition-opacity border-t border-[rgba(22,36,29,0.08)] mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)]"
          >
            Come over →
          </Link>
        </nav>
      </div>
    </header>
  );
}
