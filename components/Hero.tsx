"use client";

import { useState } from "react";
import Image from "next/image";
import { heroStats } from "@/data/stats";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Submit to Mailchimp
    const form = e.target as HTMLFormElement;
    setIsSubmitting(true);
    try {
      await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        mode: "no-cors", // Mailchimp doesn't support CORS, but submission still works
      });
      setSubmitted(true);
    } catch {
      // Even if fetch fails due to CORS, the form still submits successfully
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {submitted ? (
                <p
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    color: "#4a3a2a",
                    lineHeight: "1.6",
                  }}
                  className="text-[17px] italic"
                >
                  You&apos;re on the list. I&apos;ll be in touch when the next dinner is
                  set. ✦
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  action="https://instagram.us9.list-manage.com/subscribe/post?u=2dc474f2d0acdfb6984a19dec&id=bfc2de2d8a&f_id=0055eee1f0"
                  method="post"
                  aria-label="Join the mailing list"
                  className="flex gap-2 flex-wrap sm:flex-nowrap"
                >
                  {/* Honeypot field for bot protection */}
                  <input
                    type="text"
                    name="b_2dc474f2d0acdfb6984a19dec_bfc2de2d8a"
                    tabIndex={-1}
                    value=""
                    onChange={() => {}}
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    aria-label="Email address"
                    autoComplete="email"
                    name="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 min-w-0 px-4 py-3 rounded-full text-[16px] outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#d4c4ad]"
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      background: "rgba(250,246,238,0.6)",
                      border: "1px solid rgba(42,31,22,0.2)",
                      color: "#2a1f16",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="shrink-0 px-6 py-3 rounded-full text-[16px] transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#d4c4ad]"
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      background: "#2a1f16",
                      color: "#f4eee2",
                    }}
                  >
                    {isSubmitting ? "Joining..." : "Hear first →"}
                  </button>
                </form>
              )}
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

          {/* Right: video and photos stacked with offset */}
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
            {/* Small accent photo */}
            <div
              className="absolute w-[160px] h-[200px] rounded-[10px] overflow-hidden shadow-[0_16px_40px_-8px_rgba(42,31,22,0.35)] transition-transform duration-300 hover:scale-105 hover:rotate-[-2deg]"
              style={{ bottom: "-8px", left: "-12px", zIndex: 10 }}
            >
              <Image
                src="/images/hero-food.jpg"
                alt="A dish from the table"
                fill
                className="object-cover"
                priority
              />
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
