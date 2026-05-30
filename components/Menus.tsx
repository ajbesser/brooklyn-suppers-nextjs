import Image from "next/image";

const mayMenu = {
  month: "May",
  theme: "A spring table",
  wines: "with paired wines",
  note: "Built around what was best at the market and what made sense for the guests at the table.",
  caption: "dessert, just before",
  courses: [
    "Mussels escabeche",
    "Patatas fritas con jamón ibérico y piparras",
    "Paella mixta",
    "Roasted young potatoes with ramp aioli",
    "Fava beans with snap peas, mint, and pecorino",
    "Broccoli rabe",
    "Basque cheesecake with kumquat honey",
  ],
};

const aprilMenu = {
  month: "April",
  theme: "A late spring dinner",
  wines: "with paired wines",
  note: "A slow, generous menu with a few things to start, a shared main course, sides, and dessert.",
  caption: "from the table",
  courses: [
    "Pimento cheese and crackers",
    "Fennel pickled shrimp",
    "Pickled spring vegetables",
    "Fried chicken with honey-fermented kumquats and hot honey",
    "Collard greens",
    "Skillet cornbread",
    "Mac and cheese",
    "Strawberry rhubarb pavlova",
  ],
};

function MenuCard({
  menu,
  photo,
}: {
  menu: typeof mayMenu;
  photo?: string;
}) {
  return (
    <div
      className="rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:rotate-[0deg]"
      style={{
        background: "rgba(235,226,208,0.55)",
        boxShadow: "0 20px 60px -24px rgba(42,31,22,0.3)",
      }}
    >
      {photo && (
        <div className="relative h-[240px] overflow-hidden">
          <Image
            src={photo}
            alt="A recent Brooklyn Suppers menu"
            fill
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
        <ul className="space-y-3">
          {menu.courses.map((course, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                style={{ fontFamily: "var(--font-newsreader)", color: "#6f5f51" }}
                className="text-[15px] shrink-0 mt-0.5"
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
              <MenuCard menu={mayMenu} photo="/images/menu-may.jpg" />
            </div>
            <div className="md:-translate-y-8 md:rotate-[1.5deg]">
              <MenuCard menu={aprilMenu} />
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
