import Image from "next/image";
import Link from "next/link";

const menuNotes = [
  {
    title: "Season first",
    body: "Menus come together close to the date, based on what is peaking at the market and what feels right for the table.",
  },
  {
    title: "Guest aware",
    body: "The RSVP asks for dietary notes before the final menu is set, so the dinner can be planned with the actual guests in mind.",
  },
  {
    title: "A generous arc",
    body: "Expect a few things to start, a shared main course, sides, dessert, and wine woven through the evening.",
  },
];

export function Menus() {
  return (
    <section id="menus" className="py-24 px-6" style={{ background: "#f4eee2" }}>
      <div className="max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-14 md:gap-16 items-center">
          <div>
            <p
              style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
              className="text-[22px] mb-4 -ml-0.5"
            >
              the menu
            </p>
            <h2
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "#2a1f16",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
              className="text-[clamp(36px,4.5vw,48px)] font-normal mb-5"
            >
              Decided closer to the date.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "#574638",
                lineHeight: "1.65",
              }}
              className="text-[18px] mb-8"
            >
              Each supper is different. The final menu depends on guest
              preferences, dietary notes, and what is in peak season that week.
            </p>
            <Link
              href="/dinners"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[16px] transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4eee2]"
              style={{
                fontFamily: "var(--font-newsreader)",
                background: "#2a1f16",
                color: "#f4eee2",
              }}
            >
              Browse past dinners →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[0.82fr_1fr] gap-6 items-stretch">
            <div className="relative min-h-[320px] rounded-[8px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(42,31,22,0.28)]">
              <Image
                src="/images/menu-may.jpg"
                alt="A plated dish from a Brooklyn Supper"
                fill
                sizes="(max-width: 768px) 100vw, 38vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-center gap-5">
              {menuNotes.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-[8px] p-5"
                  style={{ background: "rgba(235,226,208,0.55)" }}
                >
                  <p
                    style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
                    className="text-[19px] mb-1"
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      color: "#574638",
                      lineHeight: "1.6",
                    }}
                    className="text-[15px]"
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
