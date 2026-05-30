import Image from "next/image";
import Link from "next/link";
import { menus, type Menu } from "@/data/menus";

function MenuCard({ menu, featured = false }: { menu: Menu; featured?: boolean }) {
  const courses = menu.courses.slice(0, featured ? 7 : 6);
  const remainingCount = menu.courses.length - courses.length;

  return (
    <article
      className="group grid min-h-full grid-cols-1 overflow-hidden rounded-[8px] transition-transform duration-300 hover:-translate-y-1 md:grid-rows-[auto_1fr]"
      style={{
        background: "rgba(250,246,238,0.72)",
        border: "1px solid rgba(42,31,22,0.11)",
        boxShadow: featured
          ? "0 24px 70px -32px rgba(42,31,22,0.42)"
          : "0 18px 52px -34px rgba(42,31,22,0.34)",
      }}
    >
      {menu.photo ? (
        <div className="relative h-[230px] overflow-hidden">
          <Image
            src={menu.photo}
            alt={`${menu.month} ${menu.year} Brooklyn Suppers table`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-24"
            style={{
              background:
                "linear-gradient(to top, rgba(42,31,22,0.42), transparent)",
            }}
          />
          <p
            style={{ fontFamily: "var(--font-kalam)", color: "#f4eee2" }}
            className="absolute bottom-3 left-4 text-[17px]"
          >
            {menu.caption}
          </p>
        </div>
      ) : (
        <div
          className="flex h-[230px] flex-col justify-between p-7"
          style={{ background: "rgba(160,78,51,0.09)" }}
        >
          <p
            style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
            className="text-[20px]"
          >
            {menu.caption}
          </p>
          <p
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "#574638",
              lineHeight: "1.55",
            }}
            className="max-w-[16rem] text-[17px] italic"
          >
            A few things to start, something generous in the middle, and dessert
            when the candles are low.
          </p>
        </div>
      )}

      <div className="flex flex-col p-7 md:p-8">
        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <p
              style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
              className="text-[25px]"
            >
              {menu.month}
            </p>
            <h3
              style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16" }}
              className="mt-1 text-[28px] font-normal leading-[1.08]"
            >
              {menu.theme}
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "#6f5f51",
              fontStyle: "italic",
            }}
            className="mt-2 shrink-0 text-right text-[14px]"
          >
            {menu.wines}
          </p>
        </div>

        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "#574638",
            lineHeight: "1.65",
          }}
          className="mb-6 text-[15px]"
        >
          {menu.note}
        </p>

        <div
          className="mb-5"
          style={{ height: "1px", background: "rgba(42,31,22,0.12)" }}
        />

        <ul className="grid list-none gap-2.5">
          {courses.map((course) => (
            <li key={course} className="grid grid-cols-[auto_1fr] gap-3">
              <span
                aria-hidden="true"
                style={{ fontFamily: "var(--font-newsreader)", color: "#a04e33" }}
                className="mt-[1px] text-[13px]"
              >
                /
              </span>
              <span
                style={{
                  fontFamily: "var(--font-newsreader)",
                  color: "#2a1f16",
                  lineHeight: "1.45",
                }}
                className="text-[14px]"
              >
                {course}
              </span>
            </li>
          ))}
        </ul>

        {remainingCount > 0 && (
          <p
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "#6f5f51",
              fontStyle: "italic",
            }}
            className="mt-4 text-[14px]"
          >
            + {remainingCount} more on the archive
          </p>
        )}
      </div>
    </article>
  );
}

export function Menus() {
  const [recent, older] = menus;

  return (
    <section id="menus" className="py-24 px-6" style={{ background: "#f4eee2" }}>
      <div className="max-w-[960px] mx-auto">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
          <div>
            <p
              style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
              className="mb-4 -ml-0.5 text-[22px]"
            >
              recent menus
            </p>
            <h2
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "#2a1f16",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
              className="text-[clamp(36px,4.5vw,48px)] font-normal"
            >
              What we&apos;ve been cooking.
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "#574638",
              lineHeight: "1.65",
            }}
            className="text-[18px]"
          >
            The menu changes every month. It comes together close to the date,
            shaped by guest preferences and what is in peak season.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:items-stretch">
          <MenuCard menu={recent} featured />
          <MenuCard menu={older} />
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-[rgba(42,31,22,0.12)] pt-7 sm:flex-row sm:items-center">
          <p
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "#574638",
              fontStyle: "italic",
            }}
            className="text-[15px]"
          >
            Full menus live in the archive as each dinner gets added.
          </p>
          <Link
            href="/dinners"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[16px] transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a04e33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4eee2]"
            style={{
              fontFamily: "var(--font-newsreader)",
              background: "#2a1f16",
              color: "#f4eee2",
            }}
          >
            Browse past dinners →
          </Link>
        </div>
      </div>
    </section>
  );
}
