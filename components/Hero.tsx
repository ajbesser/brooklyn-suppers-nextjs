"use client";

import { HeroVideo } from "@/components/HeroVideo";
import { heroStats } from "@/data/stats";
import { EmailSignupForm } from "@/components/EmailSignupForm";

function HeroStats({ className }: { className: string }) {
  return (
    <div
      className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.22)" }}
    >
      {heroStats.map(({ stat, label }) => (
        <div key={stat}>
          <span
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "var(--color-dark)",
            }}
            className="text-[20px] font-normal"
          >
            {stat}
          </span>{" "}
          <span
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "var(--color-muted)",
            }}
            className="text-[15px] ml-1.5"
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="on-green px-6 pt-20 pb-12 md:pt-28 md:pb-20"
      style={{
        borderBottom: "6px solid #5b1f26",
        background:
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(20,120,80,0.2) 0%, transparent 70%), #093525",
      }}
    >
      <div className="max-w-[960px] mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p
              style={{ fontFamily: "var(--font-kalam)", color: "var(--color-terracotta)" }}
              className="text-[22px] mb-3 -ml-0.5"
            >
              welcome —
            </p>

            <h1
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "var(--color-dark)",
                letterSpacing: "-1.8px",
                lineHeight: "1.02",
              }}
              className="text-[clamp(42px,7vw,76px)] font-normal mb-4 md:mb-6"
            >
              Grab a seat for the next supper.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "var(--color-brown)",
              }}
              className="mb-6 text-[17px] leading-[1.55] md:mb-8 md:text-[18px] md:leading-[1.7]"
            >
              A monthly dinner club centered around seasonal cooking, deep conversation, and building community.
            </p>

            <div className="hidden md:block">
              <HeroStats className="mb-10 pb-10" />
            </div>

            {/* Primary CTA — email signup */}
            <div>
              <p
                style={{ fontFamily: "var(--font-kalam)", color: "var(--color-terracotta)" }}
                className="text-[18px] mb-3"
              >
                Hear first about the next supper
              </p>
              <EmailSignupForm ringOffsetColor="var(--color-tan)" />
              <p
                style={{
                  fontFamily: "var(--font-newsreader)",
                  color: "var(--color-muted)",
                }}
                className="text-[14px] italic mt-2.5 ml-1"
              >
                RSVP opens by email first.
              </p>
            </div>
          </div>

          {/* Right: video */}
          <div className="relative hidden md:block" style={{ height: "520px" }}>
            <div
              className="absolute inset-0 rounded-[12px] overflow-hidden shadow-[0_24px_64px_-16px_rgba(22,36,29,0.3)] transition-transform duration-300 hover:scale-[1.02]"
              style={{ top: "20px", right: "0", left: "24px" }}
            >
              <HeroVideo />
            </div>
          </div>
        </div>

        {/* On phones, show the footage before secondary stats and the scroll cue. */}
        <div className="mt-6 h-[220px] overflow-hidden rounded-[12px] shadow-[0_20px_60px_-20px_rgba(22,36,29,0.3)] min-[390px]:h-[260px] md:hidden">
          <HeroVideo mobile />
        </div>
        <div className="md:hidden">
          <HeroStats className="mt-6 pb-6" />
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8 md:mt-16">
          <button
            type="button"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
            aria-label="Scroll to About section"
            className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1 opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#093525]"
            style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
          >
            <span
              style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-brown)" }}
              className="text-[12px] tracking-widest uppercase"
            >
              scroll
            </span>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1l7 7 7-7"
                stroke="var(--color-brown)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
