"use client";

export function SaveASeat() {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          className="text-[clamp(36px,5vw,52px)] font-normal mb-6"
        >
          How to reserve a seat
        </h2>

        <div
          style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.75" }}
          className="text-[18px] space-y-5 mb-10"
        >
          <p>
            RSVP opens monthly, with the email list getting first access. Each
            dinner is unique, with menus decided closer to the date based on
            guest preferences and what is in peak season. The full RSVP asks
            for dietary notes, guest count, and anything helpful to know before
            you come over.
          </p>

          <p>
            Dinners are limited to eight guests, so spots fill quickly. Join
            the list below to be the first to know when the next dinner is
            announced. The apartment address is shared after a seat is
            confirmed, not on the public site.
          </p>

          <p>
            If the table is full, you'll stay on the list for the next opening.
            You'll hear when there is a new dinner to gather around.
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToHero}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[17px] transition-all hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf6ee]"
          style={{
            fontFamily: "var(--font-newsreader)",
            background: "#2a1f16",
            color: "#f4eee2",
          }}
        >
          Hear first about the next supper →
        </button>

        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "#6f5f51",
            fontStyle: "italic",
          }}
          className="text-[15px] mt-8"
        >
          If you've joined us before, welcome back. You're already on the list.
        </p>
      </div>
    </section>
  );
}
