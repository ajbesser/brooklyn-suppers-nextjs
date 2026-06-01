import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { menus } from "@/data/menus";

export const metadata: Metadata = {
  title: "Past Dinners — Brooklyn Suppers",
  description:
    "A record of every Brooklyn Suppers dinner — the menus, the seasons, and what was good at the market.",
};

export default function DinnersPage() {
  return (
    <div style={{ background: "#faf6ee", minHeight: "100vh" }}>
      <Nav />
      {/* Page header */}
      <div className="max-w-[960px] mx-auto px-6 pt-32 pb-16">

        <p
          style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
          className="text-[22px] mb-4 -ml-0.5"
        >
          the archive
        </p>
        <h1
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "#2a1f16",
            letterSpacing: "-1.5px",
            lineHeight: "1.05",
          }}
          className="text-[clamp(44px,5.5vw,64px)] font-normal mb-6"
        >
          Every dinner,<br />
          <em style={{ color: "#574638" }}>from the beginning.</em>
        </h1>
        <p
          style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.7" }}
          className="text-[18px] max-w-[560px]"
        >
          A record of what we&apos;ve cooked, when, and why. Menus are guided by
          season and what was best at the market.
        </p>
        <p
          style={{ fontFamily: "var(--font-newsreader)", color: "#6f5f51" }}
          className="mt-8 text-[14px] uppercase tracking-[0.12em]"
        >
          {menus.length} dinners currently archived
        </p>
      </div>

      {/* Dinners list */}
      <div
        className="max-w-[960px] mx-auto px-6 pb-24"
        style={{ borderTop: "1px solid rgba(42,31,22,0.1)" }}
      >
        {menus.map((menu, i) => (
          <article
            key={`${menu.sortDate}-${menu.theme}`}
            className="py-16 md:py-20"
            style={{
              borderBottom: i < menus.length - 1 ? "1px solid rgba(42,31,22,0.1)" : "none",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-8 md:gap-16 items-start">
              {/* Left: menu content */}
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <div className="flex items-baseline gap-4">
                    <span
                      style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
                      className="text-[28px]"
                    >
                      {menu.month}
                    </span>
                    {menu.date && (
                      <time
                        dateTime={menu.sortDate}
                        style={{ fontFamily: "var(--font-newsreader)", color: "#6f5f51", fontStyle: "italic" }}
                        className="text-[14px]"
                      >
                        {menu.date}
                      </time>
                    )}
                  </div>
                  {i === 0 && (
                    <span
                      style={{ fontFamily: "var(--font-newsreader)", color: "#a04e33" }}
                      className="rounded-full border border-[rgba(160,78,51,0.28)] px-3 py-1 text-[12px] uppercase tracking-[0.12em]"
                    >
                      latest
                    </span>
                  )}
                </div>

                <h2
                  style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16" }}
                  className="text-[clamp(28px,3vw,36px)] font-normal mb-1"
                >
                  {menu.theme}
                </h2>
                <p
                  style={{ fontFamily: "var(--font-newsreader)", color: "#574638", fontStyle: "italic" }}
                  className="text-[15px] mb-4"
                >
                  {menu.wines}
                </p>
                <p
                  style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.65" }}
                  className="text-[16px] mb-8 max-w-[520px]"
                >
                  {menu.note}
                </p>

                <ul className="grid max-w-[560px] list-none gap-2.5 sm:grid-cols-2 sm:gap-x-8">
                  {menu.courses.map((course) => (
                    <li key={course} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                      <span
                        style={{ fontFamily: "var(--font-newsreader)", color: "#6f5f51" }}
                        className="text-[14px] shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span
                        style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16", lineHeight: "1.5" }}
                        className="text-[14px]"
                      >
                        {course}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: photo (if available) */}
              {menu.photo && (
                <div
                  className="relative rounded-[6px] overflow-hidden shadow-[0_16px_48px_-16px_rgba(42,31,22,0.25)] shrink-0"
                  style={{ width: "200px", height: "260px" }}
                >
                  <Image
                    src={menu.photo}
                    alt={`${menu.month} ${menu.year} dinner`}
                    fill
                    sizes="200px"
                    className="object-cover"
                    loading="lazy"
                  />
                  {menu.caption && (
                    <div
                      className="absolute bottom-0 left-0 right-0 px-3 py-2"
                      style={{ background: "rgba(42,31,22,0.35)" }}
                    >
                      <p
                        style={{ fontFamily: "var(--font-kalam)", color: "#f4eee2" }}
                        className="text-[13px]"
                      >
                        {menu.caption}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div
        className="max-w-[960px] mx-auto px-6 pb-24 text-center"
      >
        <p
          style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
          className="text-[20px] mb-4"
        >
          join the next one
        </p>
        <p
          style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.7" }}
          className="text-[17px] mb-8 max-w-[480px] mx-auto"
        >
          RSVP opens by email first. Join the list to hear when the next dinner is announced.
        </p>
        <Link
          href="/#save-a-seat"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[17px] transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4"
          style={{
            fontFamily: "var(--font-newsreader)",
            background: "#2a1f16",
            color: "#f4eee2",
          }}
        >
          Hear first about the next supper →
        </Link>
      </div>
      <Footer />
    </div>
  );
}
