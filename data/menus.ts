export interface Menu {
  month: string;
  year: number;
  sortDate: string; // ISO date used for deterministic homepage/archive ordering
  date?: string; // e.g. "May 17, 2026" — used on the archive page
  theme: string;
  wines: string;
  note: string;
  caption: string;
  courses: string[];
  photo?: string;
}

// The homepage shows the two most recent menus, and /dinners renders the archive.
// To add a new dinner: add it here with a sortDate and copy the photo to public/images/.
const menuEntries: Menu[] = [
  {
    month: "August",
    year: 2026,
    sortDate: "2026-08-30",
    date: "August 30, 2026",
    theme: "Bo Ssam & Makgeolli",
    wines: "with natural wines and makgeolli",
    note: "Perilla hand rolls, chilled sungold tomato broth, and pork belly bo ssam, with kimchi and vegetables for the table.",
    caption: "pork belly bo ssam",
    photo: "/images/menu-aug-2026.jpg",
    courses: [
      "Scallop perilla hand rolls",
      "Somen with chilled sungold tomato broth",
      "Pork belly bo ssam with spicy marinated radish",
      "Homemade baechu-kimchi",
      "Gaji-namul (marinated eggplant)",
      "Grilled shishitos",
      "Hojicha black sesame tiramisu",
    ],
  },
  {
    month: "June",
    year: 2026,
    sortDate: "2026-06-14",
    date: "June 14, 2026",
    theme: "A Table in the South of France",
    wines: "",
    note: "A table inspired by the South of France, built around produce from the Fort Greene Farmers Market.",
    caption: "grand aioli",
    photo: "/images/menu-jun-2026.jpg",
    courses: [
      "Radis au beurre",
      "Fennel pickled mussels",
      "Grand aioli",
      "Roasted branzino",
      "Carottes râpées",
      "Herby green salad",
      "Apricot clafoutis",
    ],
  },
  {
    month: "May",
    year: 2026,
    sortDate: "2026-05-17",
    date: "May 17, 2026",
    theme: "An Iberian table",
    wines: "",
    note: "A Spanish-leaning menu, inspired by spring produce.",
    caption: "paella mixta",
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
    sortDate: "2026-04-12",
    date: "April 12, 2026",
    theme: "Fried Chicken & Champagne",
    wines: "",
    note: "A proper Southern spread — pimento cheese, fried chicken, collard greens, skillet cornbread, and mac, with pavlova at the end. Paired with plenty of bubbles.",
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
  {
    month: "February",
    year: 2026,
    sortDate: "2026-02-01",
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
    sortDate: "2026-01-01",
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
];

export const menus = [...menuEntries].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate)
);
