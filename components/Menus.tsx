import Image from "next/image";
import { menus, type Menu } from "@/data/menus";

function MenuCard({ menu }: { menu: Menu }) {
  return (
    <div
      className="rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03]"
      style={{
        background: "rgba(235,226,208,0.55)",
        boxShadow: "0 20px 60px -24px rgba(42,31,22,0.3)",
      }}
    >
      {menu.photo && (
        <div className="relative h-[240px] overflow-hidden">
          <Image
            src={menu.photo}
            alt="A recent Brooklyn Suppers menu"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-8">
        {/* Month + subtitle */}
        <div className="flex items-baseline gap-3 mb-1">
          <span
            style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
            className="text-[26px]"
          >
            {menu.month}
          </span>
          <span
            style={{ fontFamily: "var(--font-newsreader)", color: "#6f5f51", fontStyle: "italic" }}
            className="text-[13px]"
          >
            a Brooklyn Supper
          </span>
        </div>

        {/* Theme */}
        <p
          style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16" }}
          className="text-[26px] font-normal mb-1"
        >
          {menu.theme}
        </p>
        <p
          style={{ fontFamily: "var(--font-newsreader)", color: "#574638", fontStyle: "italic" }}
          className="text-[15px] mb-4"
        >
          {menu.wines}
        </p>

        <p
          style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.6" }}
          className="text-[14px] mb-6"
        >
          {menu.note}
        </p>

        {/* Divider */}
        <div
          className="mb-6"
          style={{ height: "1px", background: "rgba(42,31,22,0.12)" }}
        />

        {/* Course list */}
        <ul className="space-y-3 list-none">
          {menu.courses.map((course) => (
            <li key={course} className="flex gap-3 items-start">
              <span
                style={{ fontFamily: "var(--font-newsreader)", color: "#6f5f51" }}
                className="text-[15px] shrink-0 mt-0.5"
                aria-hidden="true"
              >
                —
              </span>
              <span
                style={{ fontFamily: "var(--font-newsreader)", color: "#2a1f16", lineHeight: "1.5" }}
                className="text-[15px]"
              >
                {course}
              </span>
            </li>
          ))}
        </ul>

        <p
          style={{ fontFamily: "var(--font-kalam)", color: "#6f5f51" }}
          className="text-[16px] mt-6"
        >
          {menu.caption}
        </p>
      </div>
    </div>
  );
}

export function Menus() {
  const [recent, older] = menus;

  return (
    <section id="menus" className="py-24 px-6" style={{ background: "#f4eee2" }}>
      <div className="max-w-[960px] mx-auto">
        {/* Header */}
        <div className="max-w-[600px] mb-16">
          <p
            style={{ fontFamily: "var(--font-kalam)", color: "#a04e33" }}
            className="text-[22px] mb-4 -ml-0.5"
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
            className="text-[clamp(36px,4.5vw,48px)] font-normal mb-5"
          >
            What we've been cooking.
          </h2>
          <p
            style={{ fontFamily: "var(--font-newsreader)", color: "#574638", lineHeight: "1.65" }}
            className="text-[18px]"
          >
            A look at the shape of a recent dinner — to give you a sense of how
            a typical evening goes.
          </p>
        </div>

        {/* Cards - overlaid layout with natural angles */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="md:translate-y-8 md:rotate-[-2deg]">
              <MenuCard menu={recent} />
            </div>
            <div className="md:-translate-y-8 md:rotate-[1.5deg]">
              <MenuCard menu={older} />
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            color: "#574638",
            fontStyle: "italic",
            textAlign: "center",
          }}
          className="text-[16px] mt-12"
        >
          A new menu every month, shaped by the season and whatever's good at
          the market that week.
        </p>
      </div>
    </section>
  );
}
