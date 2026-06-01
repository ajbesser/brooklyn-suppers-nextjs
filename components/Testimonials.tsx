import { RotatingQuote } from "@/components/RotatingQuote";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--color-parchment)" }}>
      <div className="max-w-[720px] mx-auto">
        <p
          style={{ fontFamily: "var(--font-kalam)", color: "var(--color-terracotta)" }}
          className="text-[22px] mb-16 -ml-0.5"
        >
          in their words
        </p>
        <RotatingQuote
          quotes={testimonials.map(t => t.quote)}
          className="text-[clamp(26px,4vw,46px)] text-center"
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "var(--color-body)",
            lineHeight: "1.4",
            fontStyle: "italic",
          }}
        />
      </div>
    </section>
  );
}
