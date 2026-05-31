import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "#f4eee2" }}>
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p
              style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
              className="text-[22px] mb-4 -ml-0.5"
            >
              what it is
            </p>

            <h2
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "#2a1f16",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
              className="text-[clamp(36px,4.5vw,48px)] font-normal mb-8"
            >
              A space for community,{" "}
              <em style={{ color: "#574638" }}>over a long dinner.</em>
            </h2>

            <div
              style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.75" }}
              className="text-[18px] space-y-5"
            >
              <p>
                Brooklyn Suppers started a little over three years ago as a way
                to bring people together over food and thoughtful conversation.
                It&apos;s grown into a monthly rhythm I look forward to every month.
              </p>
              <p>
                Each dinner is different. Menus are guided by what is in peak
                season, and what feels right for the table.
              </p>
              <p>
                A small group around one table, sharing a family-style spread
                paired with regional wines.
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
