import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: "#f4eee2" }}>
      <div className="max-w-[960px] mx-auto">
        <p
          style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
          className="text-[22px] mb-14 -ml-0.5"
        >
          in their words
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map(({ quote }) => (
            <blockquote
              key={quote}
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
                className="text-[20px]"
              >
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
