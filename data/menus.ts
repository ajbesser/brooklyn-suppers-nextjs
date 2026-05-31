export interface Menu {
  month: string;
  year: number;
  date?: string; // e.g. "May 17, 2026" — used on the archive page
  theme: string;
  wines: string;
  note: string;
  caption: string;
  courses: string[];
  photo?: string;
}

// Most recent first — the homepage shows the first two, and /dinners renders the archive.
// To add a new dinner: prepend a new object here (and copy the photo to public/images/).
export const menus: Menu[] = [
  {
    month: "May",
    year: 2026,
    date: "May 17, 2026",
    theme: "A spring table",
    wines: "with paired wines",
    note: "Built around what was best at the market and what made sense for the guests at the table.",
    caption: "dessert, just before",
    photo: "/images/menu-may.jpg",
    courses: [
      "Mussels escabeche",
      "Patatas fritas con jamón ibérico y piparras",
      "Paella mixta",
      "Roasted young potatoes with ramp aioli",
      "Fava beans with snap peas, mint, and pecorino",
      "Broccoli rabe",
      "Basque cheesecake with kumquat honey",
    ],
  },
  {
    month: "February",
    year: 2026,
    theme: "Spicy Italian",
    wines: "with paired wines",
    note: "A full Italian spread with heat running through it — Calabrian chili, bitter radicchio, and two desserts.",
    caption: "from the table",
    courses: [
      "Chicken liver mousse crostini with honey-fermented kumquat",
      "Whipped feta dip",
      "Homemade focaccia con pomodoro",
      "Pasta puttanesca with Calabrian chili",
      "Roasted badger flame beets with burrata",
      "Radicchio salad",
      "Mandarin posset",
      "Tiramisu",
    ],
  },
  {
    month: "January",
    year: 2026,
    theme: "Southeast Asia via Italy",
    wines: "with paired wines",
    note: "Vietnamese and Thai technique folded into Italian forms — bo kho as ragù, pad kra pao as arancini.",
    caption: "from the table",
    courses: [
      "Sea bass crudo with ginger-lime dressing",
      "Pad kra pao arancini with nuoc cham aioli",
      "Bo kho ragù with pappardelle",
      "Pomelo salad",
      "Vietnamese coffee tiramisu",
    ],
  },
  {
    month: "April",
    year: 2026,
    date: "April 12, 2026",
    theme: "A late spring dinner",
    wines: "with paired wines",
    note: "A slow, generous menu with a few things to start, a shared main course, sides, and dessert.",
    caption: "fried chicken with honey-fermented kumquats",
    photo: "/images/menu-apr.jpg",
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
  },
];
