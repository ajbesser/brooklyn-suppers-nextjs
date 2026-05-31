import Image from "next/image";

const items = [
  {
    bold: "Come hungry.",
    rest: " There's usually bread and something to start.",
  },
  {
    bold: "A seasonal menu",
    rest: ", three or four courses, served family-style.",
  },
  {
    bold: "Wine pairings",
    rest: " throughout. Bring a bottle if you'd like to share.",
  },
  {
    bold: "A slow dinner,",
    rest: " with time to settle in and let the evening unfold.",
  },
  {
    bold: "Address by confirmation.",
    rest: " The exact location is shared only with confirmed guests.",
  },
  {
    bold: "Dietary notes",
    rest: " are part of the RSVP, and I'll confirm what can be accommodated before the dinner.",
  },
];

export function WhatToExpect() {
  return (
    <section id="expect" className="py-24 px-6" style={{ background: "#faf6ee" }}>
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Right side: heading + list */}
          <div className="md:order-2">
            <p
              style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
              className="text-[22px] mb-4 -ml-0.5"
            >
              what to expect
            </p>

            <h2
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "#2a1f16",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
              className="text-[clamp(36px,4.5vw,48px)] font-normal mb-12"
            >
              A long evening,{" "}
              <em style={{ color: "#574638" }}>mostly.</em>
            </h2>

            <ul className="space-y-8 list-none">
              {items.map(({ bold, rest }) => (
                <li key={bold} className="flex gap-5 items-start">
                  <span
                    style={{ fontFamily: "var(--font-kalam)", color: "#a04e33", lineHeight: "1.6" }}
                    className="text-[24px] shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    ~
                  </span>
                  <p
                    style={{ fontFamily: "var(--font-newsreader)", lineHeight: "1.65" }}
                    className="text-[18px]"
                  >
                    <span style={{ color: "#2a1f16" }}>{bold}</span>
                    <span style={{ color: "#574638" }}>{rest}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Left side: decorative quote + table photo */}
          <div className="md:order-1 flex flex-col gap-10 justify-center">
            <blockquote
              className="relative"
              style={{ borderLeft: "2px solid rgba(160,78,51,0.3)", paddingLeft: "24px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-newsreader)",
                  color: "#574638",
                  lineHeight: "1.65",
                  fontStyle: "italic",
                }}
                className="text-[22px]"
              >
                &ldquo;The table is small enough that everyone gets folded into the
                same conversation.&rdquo;
              </p>
              <footer
                style={{ fontFamily: "var(--font-kalam)", color: "#6f5f51" }}
                className="text-[17px] mt-4"
              >
                — a returning guest
              </footer>
            </blockquote>

            <div className="flex flex-col gap-3">
              <div
                className="group relative rounded-[16px] overflow-hidden shadow-[0_16px_48px_-16px_rgba(42,31,22,0.25)]"
                style={{ height: "300px" }}
              >
                <Image
                  src="/images/menu-apr.jpg"
                  alt="Fried chicken with honey-fermented kumquats"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p
                style={{ fontFamily: "var(--font-kalam)", color: "#6f5f51" }}
                className="text-[17px] ml-1"
              >
                the long table
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
