"use client";

import { EmailSignupForm } from "@/components/EmailSignupForm";

export function SaveASeat() {
  return (
    <section id="save-a-seat" className="py-24 px-6" style={{ background: "#faf6ee" }}>
      <div className="max-w-[720px] mx-auto text-center">
        <p
          style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
          className="text-[22px] mb-4"
        >
          RSVP
        </p>

        <h2
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "#2a1f16",
            letterSpacing: "-1px",
            lineHeight: "1.1",
          }}
          className="text-[clamp(36px,5vw,52px)] font-normal mb-10"
        >
          How to reserve a seat
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
          {[
            {
              num: "01",
              heading: "Join the list",
              body: "Sign up below. The email list gets first access — usually a week or two before a dinner is publicly announced.",
            },
            {
              num: "02",
              heading: "Receive the RSVP",
              body: "When the next dinner is set, you'll get an email with the menu theme, date, and a link to reserve your seat.",
            },
            {
              num: "03",
              heading: "Confirm your spot",
              body: "The full RSVP asks for dietary notes and guest count. Once confirmed, you'll receive the address and any final details.",
            },
          ].map(({ num, heading, body }) => (
            <div key={num} className="flex flex-col gap-2">
              <span
                style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
                className="text-[20px]"
              >
                {num}
              </span>
              <p
                style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16" }}
                className="text-[17px] font-normal"
              >
                {heading}
              </p>
              <p
                style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.65" }}
                className="text-[15px]"
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mb-10"
          style={{ height: "1px", background: "rgba(42,31,22,0.1)" }}
        />

        <div
          style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.75" }}
          className="text-[17px] mb-8"
        >
          <p>
            Seats are limited, so spots fill quickly. If the table is full,
            you&apos;ll stay on the list for the next opening.
          </p>
        </div>

        {/* Inline email signup */}
        <div className="text-left">
          <EmailSignupForm />
        </div>

        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "#6f5f51",
            fontStyle: "italic",
          }}
          className="text-[15px] mt-6"
        >
          If you&apos;ve joined us before, welcome back.
        </p>
      </div>
    </section>
  );
}
