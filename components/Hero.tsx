"use client";

import Image from "next/image";
import { heroStats } from "@/data/stats";
import { EmailSignupForm } from "@/components/EmailSignupForm";

export function Hero() {
  return (
    <section
      className="pt-28 pb-20 px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(160,78,51,0.07) 0%, transparent 70%), #d4c4ad",
      }}
    >
      <div className="max-w-[960px] mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p
              style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
              className="text-[22px] mb-3 -ml-0.5"
            >
              welcome —
            </p>

            <h1
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "#2a1f16",
                letterSpacing: "-1.8px",
                lineHeight: "1.02",
              }}
              className="text-[clamp(52px,7vw,76px)] font-normal mb-6"
            >
              Grab a seat for the next supper.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "#4a3a2a",
                lineHeight: "1.7",
              }}
              className="text-[18px] mb-8"
            >
              A monthly dinner club built around a long table, seasonal cooking,
              wine, and good conversation.
            </p>

            {/* Social proof */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10 pb-10"
              style={{ borderBottom: "1px solid rgba(42,31,22,0.15)" }}
            >
              {heroStats.map(({ stat, label }) => (
                <div key={stat}>
                  <span
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      color: "#2a1f16",
                    }}
                    className="text-[20px] font-normal"
                  >
                    {stat}
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      color: "#6f5f51",
                    }}
                    className="text-[15px] ml-1.5"
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary CTA — email signup */}
            <div>
              <p
                style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
                className="text-[18px] mb-3"
              >
                Hear first about the next supper
              </p>
              <EmailSignupForm ringOffsetColor="#d4c4ad" />
              <p
                style={{
                  fontFamily: "var(--font-newsreader)",
                  color: "#6f5f51",
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
              className="absolute inset-0 rounded-[12px] overflow-hidden shadow-[0_24px_64px_-16px_rgba(42,31,22,0.3)] transition-transform duration-300 hover:scale-[1.02]"
              style={{ top: "20px", right: "0", left: "24px" }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/hero-poster.jpg"
                className="w-full h-full object-cover"
                aria-label="Video of guests around the table at a Brooklyn Supper"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                <Image
                  src="/images/hero-people.jpg"
                  alt="Guests around the table at a Brooklyn Supper"
                  fill
                  className="object-cover"
                />
              </video>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-14 md:mt-16">
          <button
            type="button"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1 opacity-50 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#d4c4ad]"
            style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
          >
            <span
              style={{ fontFamily: "var(--font-newsreader)", color: "#4a3a2a" }}
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
                stroke="#4a3a2a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile video */}
        <div className="md:hidden mt-10 rounded-[12px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(42,31,22,0.3)] h-[260px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/hero-poster.jpg"
            className="w-full h-full object-cover"
            aria-label="Video of guests around the table at a Brooklyn Supper"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <Image
              src="/images/hero-people.jpg"
              alt="Guests around the table at a Brooklyn Supper"
              fill
              className="object-cover"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
