import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--color-parchment)" }}>
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p
              style={{ fontFamily: "var(--font-kalam)", color: "var(--color-terracotta)" }}
              className="text-[22px] mb-4 -ml-0.5"
            >
              what it is
            </p>

            <h2
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "var(--color-dark)",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
              className="text-[clamp(36px,4.5vw,48px)] font-normal mb-8"
            >
              A space for community,{" "}
              <em style={{ color: "var(--color-body)" }}>over a long dinner.</em>
            </h2>

            <div
              style={{ fontFamily: "var(--font-newsreader)", color: "var(--color-body)", lineHeight: "1.75" }}
              className="text-[18px] space-y-5"
            >
              <p>
                Brooklyn Suppers started a little over three years ago as a way
                to bring people together over food and thoughtful conversation.
                I look forward to the new and returning attendees who get to
                connect around the dinner table.
              </p>
              <p>
                Each dinner is different. Menus are designed uniquely each
                month, inspired by what is in season.
              </p>
            </div>
          </div>

          {/* Right: photo + caption */}
          <div className="flex flex-col gap-4">
            <div
              className="group relative rounded-[3px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(42,31,22,0.28)]"
              style={{ height: "520px" }}
            >
              <Image
                src="/images/dinner-sep-2025.jpg"
                alt="A fully set dinner table — skirt steak, salads, marigolds"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
