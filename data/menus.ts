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
    month: "April",
    year: 2026,
    date: "April 12, 2026",
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
  },
];
