"use client";

import { useState } from "react";
import Image from "next/image";
import { heroStats } from "@/data/stats";

export function Hero() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dietary, setDietary] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setShowModal(true);
  };

  const submitToMailchimp = async () => {
    setIsSubmitting(true);
    const data = new FormData();
    data.append("EMAIL", email);
    data.append("FNAME", firstName);
    data.append("LNAME", lastName);
    data.append("MMERGE11", dietary);
    data.append("b_2dc474f2d0acdfb6984a19dec_bfc2de2d8a", ""); // honeypot
    try {
      await fetch(
        "https://instagram.us9.list-manage.com/subscribe/post?u=2dc474f2d0acdfb6984a19dec&id=bfc2de2d8a&f_id=0055eee1f0",
        { method: "POST", body: data, mode: "no-cors" }
      );
    } finally {
      setIsSubmitting(false);
      setShowModal(false);
      setSubmitted(true);
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
                <>
                <form
                  onSubmit={openModal}
                  aria-label="Join the mailing list"
                  className="flex gap-2 flex-wrap sm:flex-nowrap"
                >
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
                    className="shrink-0 px-6 py-3 rounded-full text-[16px] transition-all hover:opacity-90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#d4c4ad]"
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      background: "#2a1f16",
                      color: "#f4eee2",
                    }}
                  >
                    Hear first →
                  </button>
                </form>

                {/* Optional-details modal */}
                {showModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    style={{ background: "rgba(42,31,22,0.5)", backdropFilter: "blur(4px)" }}
                    onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
                  >
                    <div
                      className="w-full max-w-[420px] rounded-[20px] p-8 shadow-2xl"
                      style={{ background: "#faf6ee" }}
                    >
                      <p
                        style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
                        className="text-[18px] mb-1"
                      >
                        one more thing —
                      </p>
                      <h2
                        style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16", letterSpacing: "-0.5px" }}
                        className="text-[26px] font-normal mb-2"
                      >
                        A couple quick details
                      </h2>
                      <div className="mb-6" />

                      <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            aria-label="First name"
                            autoComplete="given-name"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="flex-1 min-w-0 px-4 py-3 rounded-full text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33]"
                            style={{
                              fontFamily: "var(--font-newsreader)",
                              background: "#f0e8d8",
                              border: "1px solid rgba(42,31,22,0.15)",
                              color: "#2a1f16",
                            }}
                          />
                          <input
                            type="text"
                            aria-label="Last name"
                            autoComplete="family-name"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="flex-1 min-w-0 px-4 py-3 rounded-full text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33]"
                            style={{
                              fontFamily: "var(--font-newsreader)",
                              background: "#f0e8d8",
                              border: "1px solid rgba(42,31,22,0.15)",
                              color: "#2a1f16",
                            }}
                          />
                        </div>
                        <textarea
                          aria-label="Dietary restrictions"
                          placeholder="Any dietary restrictions? (optional)"
                          value={dietary}
                          onChange={(e) => setDietary(e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 rounded-[14px] text-[15px] outline-none resize-none focus-visible:ring-2 focus-visible:ring-[#a04e33]"
                          style={{
                            fontFamily: "var(--font-newsreader)",
                            background: "#f0e8d8",
                            border: "1px solid rgba(42,31,22,0.15)",
                            color: "#2a1f16",
                          }}
                        />
                        <button
                          type="button"
                          onClick={submitToMailchimp}
                          disabled={isSubmitting}
                          className="w-full py-3 rounded-full text-[16px] transition-all hover:opacity-90 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33]"
                          style={{
                            fontFamily: "var(--font-newsreader)",
                            background: "#2a1f16",
                            color: "#f4eee2",
                          }}
                        >
                          {isSubmitting ? "Joining..." : "Join the list →"}
                        </button>
                        <button
                          type="button"
                          onClick={submitToMailchimp}
                          disabled={isSubmitting}
                          className="text-[14px] underline underline-offset-2 transition-opacity hover:opacity-70 disabled:opacity-40"
                          style={{ fontFamily: "var(--font-newsreader)", color: "#6f5f51" }}
                        >
                          Skip and just use my email
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                </>
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
