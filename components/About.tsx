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
                It's grown into a monthly rhythm I look forward to every month.
              </p>
              <p>
                Each dinner is different. Menus are guided by what is in peak
                season, and what feels right for the table.
              </p>
              <p>
                Eight chairs around one table. Three or four courses, paced slowly.
                Wine pairings throughout. The point is a generous evening with
                enough time for the meal and the conversation to unfold.
              </p>
            </div>
          </div>

          {/* Right: photo + caption */}
          <div className="flex flex-col gap-4">
            <div
              className="relative rounded-[3px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(42,31,22,0.28)]"
              style={{ height: "400px" }}
            >
              <Image
                src="/images/about.png"
                alt="A warm dinner gathering in Bed-Stuy"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <p
              style={{ fontFamily: "var(--font-kalam)", color: "#6f5f51" }}
              className="text-[17px] ml-1"
            >
              the table, in good company
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
