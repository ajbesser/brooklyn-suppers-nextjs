"use client";

import { EmailSignupForm } from "@/components/EmailSignupForm";
import Link from "next/link";

export function SaveASeat() {
  return (
    <section id="save-a-seat" className="py-24 px-6" style={{ background: "var(--color-cream)" }}>
      <div className="max-w-[720px] mx-auto text-center">
        <p
          style={{ fontFamily: "var(--font-kalam)", color: "var(--color-terracotta)" }}
          className="text-[22px] mb-4"
        >
          RSVP
        </p>

        <h2
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "var(--color-dark)",
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
              body: "Sign up below to hear first when the next dinner opens. Joining the mailing list doesn't reserve a seat.",
            },
            {
              num: "02",
              heading: "Receive the invite",
              body: "When the next dinner is set, you'll get an email with the date, cost, full details, and a link to RSVP.",
            },
            {
              num: "03",
              heading: "Confirm your spot",
              body: "Share dietary notes when you RSVP. I'll confirm accommodations before you pay. Seats are non-refundable once confirmed; the exact address is shared only with confirmed guests.",
            },
          ].map(({ num, heading, body }) => (
            <div key={num} className="flex flex-col gap-2">
              <span
                style={{ fontFamily: "var(--font-kalam)", color: "var(--color-terracotta)" }}
                className="text-[20px]"
              >
                {num}
              </span>
              <p
                style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-dark)" }}
                className="text-[17px] font-normal"
              >
                {heading}
              </p>
              <p
                style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)", lineHeight: "1.65" }}
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
          style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)", lineHeight: "1.75" }}
          className="text-[17px] mb-8"
        >
          <p>
            Seats are limited, so spots fill quickly.
          </p>
        </div>

        {/* Inline email signup */}
        <div className="text-left">
          <EmailSignupForm />
        </div>

        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "var(--color-muted)",
            fontStyle: "italic",
          }}
          className="text-[15px] mt-6"
        >
          Already on the list? Check your inbox for the latest invitation.
          If you missed it, <Link href="/contact" className="underline">send me a note</Link>.
        </p>
      </div>
    </section>
  );
}
