"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function EmailSignupForm({ ringOffsetColor = "#faf6ee" }: { ringOffsetColor?: string }) {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dietary, setDietary] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const modalTriggerRef = useRef<HTMLButtonElement>(null);

  const openModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setShowModal(true);
  };

  const closeModal = useCallback(() => {
    setShowModal(false);
    modalTriggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!showModal) return;

    firstNameRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal, showModal]);

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

  if (submitted) {
    return (
      <p
        style={{
          fontFamily: "var(--font-newsreader)",
          color: "#4a3a2a",
          lineHeight: "1.6",
        }}
        className="text-[17px] italic"
      >
        You&apos;re on the list. I&apos;ll be in touch when the next dinner is set. ✦
      </p>
    );
  }

  return (
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
          className="flex-1 min-w-0 px-4 py-3 rounded-full text-[16px] outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-2"
          style={{
            fontFamily: "var(--font-newsreader)",
            background: "rgba(250,246,238,0.6)",
            border: "1px solid rgba(42,31,22,0.2)",
            color: "#2a1f16",
            // @ts-expect-error CSS custom property
            "--tw-ring-offset-color": ringOffsetColor,
          }}
        />
        <button
          type="submit"
          ref={modalTriggerRef}
          className="shrink-0 px-6 py-3 rounded-full text-[16px] transition-all hover:opacity-90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-2"
          style={{
            fontFamily: "var(--font-newsreader)",
            background: "#2a1f16",
            color: "#f4eee2",
            // @ts-expect-error CSS custom property
            "--tw-ring-offset-color": ringOffsetColor,
          }}
        >
          Hear first →
        </button>
      </form>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(42,31,22,0.5)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="signup-details-title"
            aria-describedby="signup-details-description"
            className="w-full max-w-[420px] rounded-[20px] p-8 shadow-2xl"
            style={{ background: "#faf6ee" }}
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <p
                style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
                className="text-[18px]"
              >
                one more thing —
              </p>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close signup details"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[18px] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33]"
                style={{
                  fontFamily: "var(--font-newsreader)",
                  color: "#2a1f16",
                  background: "rgba(42,31,22,0.06)",
                }}
              >
                ×
              </button>
            </div>
            <h2
              id="signup-details-title"
              style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16", letterSpacing: "-0.5px" }}
              className="text-[26px] font-normal mb-2"
            >
              A couple quick details
            </h2>
            <p
              id="signup-details-description"
              style={{ fontFamily: "var(--font-newsreader)", color: "#6f5f51", lineHeight: "1.55" }}
              className="mb-6 text-[15px]"
            >
              Optional, but helpful for greeting you properly and planning future menus.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  ref={firstNameRef}
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
  );
}
