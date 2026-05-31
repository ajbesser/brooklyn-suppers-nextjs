/**
 * Complete record of every Brooklyn Suppers dinner hosted to date.
 *
 * This file is NOT imported by any page — it never becomes a public URL.
 * It exists as context for Claude and Codex when thinking about themes,
 * menu card structure, recurring ingredients, and the host's culinary voice.
 *
 * visible: true  → polished enough to appear on the /dinners archive page
 * visible: false → reference only (earlier, less formal dinners)
 *
 * To add a new dinner: append a new entry and set visible accordingly.
 * If it should also appear on the site, add it to data/menus.ts.
 */

export interface DinnerRecord {
  number: number;
  title: string;
  month: string;
  year: number;
  cuisine: string;
  mainDish: string;
  sides: string[];
  dessert?: string;
  specialDrinks?: string;
  note?: string;
  photo?: string;
  visible: boolean;
}

export const dinnersArchive: DinnerRecord[] = [
  {
    number: 1,
    title: "Pollo a la Brasa",
    month: "February",
    year: 2023,
    cuisine: "Peruvian",
    mainDish: "Peruvian roast chicken",
    sides: ["Aji sauce", "Roasted brussels sprouts", "Arugula salad"],
    specialDrinks: "Pisco sours",
    visible: false,
  },
  {
    number: 2,
    title: "Thai Dinner",
    month: "February",
    year: 2023,
    cuisine: "Thai",
    mainDish: "Gai yang (Thai grilled chicken)",
    sides: ["Papaya salad", "Tom yum soup"],
    visible: false,
  },
  {
    number: 3,
    title: "Spicy, Sour, Fresh",
    month: "April",
    year: 2023,
    cuisine: "Thai",
    mainDish: "Roasted seabass lettuce wraps",
    sides: ["Citrus-fennel salad", "Charred snap peas"],
    visible: false,
  },
  {
    number: 4,
    title: "Baja-Style Fish Tacos",
    month: "May",
    year: 2023,
    cuisine: "Mexican",
    mainDish: "Fried fish tacos with roasted jalapeño cream sauce",
    sides: ["Citrus salad"],
    visible: false,
  },
  {
    number: 5,
    title: "Una Noche en España",
    month: "September",
    year: 2023,
    cuisine: "Spanish",
    mainDish: "Pintxos spread",
    sides: [
      "Gazpacho",
      "Tortilla española",
      "Pan con tomate",
      "Blistered shishitos",
      "Patatas bravas",
      "Gambas al ajillo",
    ],
    visible: false,
  },
  {
    number: 6,
    title: "Festa di San Gennaro",
    month: "September",
    year: 2023,
    cuisine: "Italian-American",
    mainDish: "Spicy vodka pasta",
    sides: ["Homemade focaccia", "Polpette", "Caesar salad"],
    dessert: "Berries and cream",
    visible: false,
  },
  {
    number: 7,
    title: "Bossam & Banchan",
    month: "December",
    year: 2023,
    cuisine: "Korean",
    mainDish: "Bo-ssam",
    sides: [
      "Spicy radish salad",
      "Japchae",
      "Soybean sprouts",
      "Marinated spinach",
    ],
    visible: false,
  },
  {
    number: 8,
    title: "Una Cena di Natale",
    month: "December",
    year: 2023,
    cuisine: "Italian",
    mainDish: "Lasagna bolognese",
    sides: ["Bitter green salad"],
    dessert: "Tiramisu",
    visible: false,
  },
  {
    number: 9,
    title: "Pasta e Fagioli",
    month: "January",
    year: 2024,
    cuisine: "Italian",
    mainDish: "Pasta e fagioli",
    sides: ["Vegan faux gras pâté", "Charred broccolini", "Bitter green salad"],
    dessert: "Chocolate mousse",
    visible: false,
  },
  {
    number: 10,
    title: "Beef Noodle Soup",
    month: "February",
    year: 2024,
    cuisine: "Taiwanese",
    mainDish: "Beef noodle soup",
    sides: ["Smashed cucumber salad"],
    dessert: "Pineapple cakes",
    visible: false,
  },
  {
    number: 11,
    title: "Sud Italia",
    month: "February",
    year: 2024,
    cuisine: "Southern Italian",
    mainDish: "Pasta alla norma",
    sides: ["Arancini", "Bitter green salad"],
    dessert: "Torta caprese",
    visible: false,
  },
  {
    number: 12,
    title: "Chicken Dinner",
    month: "March",
    year: 2024,
    cuisine: "Seasonal American",
    mainDish: "Roasted chicken",
    sides: ["Chicken fat potatoes", "Roasted mushrooms", "Bitter green salad"],
    dessert: "Flourless chocolate cake",
    visible: false,
  },
  {
    number: 13,
    title: "Cocktail Collab",
    month: "April",
    year: 2024,
    cuisine: "Italian",
    mainDish: "Pasta alla Nerano",
    sides: [
      "Homemade focaccia",
      "Roasted mushrooms",
      "Celery salad",
      "Caprese salad",
    ],
    dessert: "Tiramisu",
    specialDrinks: "Cucumber basil gimlet, Averna negroni",
    visible: false,
  },
  {
    number: 14,
    title: "Italian Dinner",
    month: "January",
    year: 2025,
    cuisine: "Italian",
    mainDish: "Ragù bolognese",
    sides: ["Bitter greens salad"],
    dessert: "Tiramisu",
    visible: false,
  },
  {
    number: 15,
    title: "Seasonal Summer Feast",
    month: "August",
    year: 2025,
    cuisine: "Seasonal American",
    mainDish: "Rainbow trout",
    sides: [
      "Pan con tomate",
      "Roasted whole cauliflower",
      "Fingerling potatoes",
      "Smashed cucumber salad",
    ],
    specialDrinks: "Sungold tomato martini",
    visible: false,
  },
  {
    number: 16,
    title: "Fresh, Spicy & Tart",
    month: "September",
    year: 2025,
    cuisine: "Southeast Asian",
    mainDish: "Skirt steak lettuce wraps",
    sides: ["Sautéed wild mushrooms", "Farmers market tomato salad"],
    dessert: "Vietnamese coffee tiramisu",
    visible: true,
  },
  {
    number: 17,
    title: "Southeast Asia via Italy",
    month: "January",
    year: 2026,
    cuisine: "Southeast Asian-Italian fusion",
    mainDish: "Bo kho ragù with pappardelle",
    sides: [
      "Pad kra pao arancini with nuoc cham aioli",
      "Sea bass crudo with ginger-lime dressing",
      "Pomelo salad",
    ],
    dessert: "Vietnamese coffee tiramisu",
    visible: true,
  },
  {
    number: 18,
    title: "Spicy Italian",
    month: "February",
    year: 2026,
    cuisine: "Seasonal Italian",
    mainDish: "Pasta puttanesca with Calabrian chili",
    sides: [
      "Chicken liver mousse crostini with honey-fermented kumquat",
      "Whipped feta dip",
      "Homemade focaccia con pomodoro",
      "Roasted badger flame beets with burrata",
      "Radicchio salad",
    ],
    dessert: "Mandarin posset, tiramisu",
    visible: true,
  },
  {
    number: 19,
    title: "Southern Fried Chicken & Champagne",
    month: "April",
    year: 2026,
    cuisine: "American South",
    mainDish: "Fried chicken with honey-fermented kumquats and hot honey",
    sides: [
      "Pimento cheese and crackers",
      "Fennel pickled shrimp",
      "Pickled spring vegetables",
      "Collard greens",
      "Skillet cornbread",
      "Mac and cheese",
    ],
    dessert: "Strawberry rhubarb pavlova",
    specialDrinks: "Champagne",
    visible: true,
  },
  {
    number: 20,
    title: "Paella Night",
    month: "May",
    year: 2026,
    cuisine: "Spanish",
    mainDish: "Paella mixta",
    sides: [
      "Mussels escabeche",
      "Patatas fritas con jamón ibérico y piparras",
      "Roasted young potatoes with ramp aioli",
      "Fava beans with snap peas, mint, and pecorino",
      "Broccoli rabe",
    ],
    dessert: "Basque cheesecake with kumquat honey",
    specialDrinks: "Vermut",
    visible: true,
  },
];

/**
 * Recurring elements worth knowing:
 * - Bitter greens appear as a side in many dinners — a signature.
 * - Honey-fermented kumquats recur (#18, #19) — a house ingredient.
 * - Vietnamese coffee tiramisu appears in #16 and #17 — a signature dessert.
 * - Italian and Spanish are the most frequent cuisine bases.
 * - Arancini appears in two dinners (#11, #17) in different forms — a recurring technique.
 * - The menu structure is usually: snacks/starters → shared main → sides → dessert.
 */
