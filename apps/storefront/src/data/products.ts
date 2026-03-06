export type Product = {
  id: string;
  name: string;
  vendor: string;
  price: number;
  description: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "zellige-pack",
    name: "Premium Zellige Tile Pack",
    vendor: "Fez Atelier",
    price: 420,
    description: "Hand-cut traditional zellige tiles for walls and premium interiors.",
    category: "Zellige",
  },
  {
    id: "berber-carpet",
    name: "Berber Wool Carpet",
    vendor: "Atlas Loom",
    price: 1850,
    description: "Authentic handwoven carpet with warm natural fibers.",
    category: "Carpets",
  },
  {
    id: "argan-oil",
    name: "Pure Argan Oil 250ml",
    vendor: "Souss Cooperative",
    price: 180,
    description: "Cold-pressed organic argan oil from local producers.",
    category: "Argan",
  },
  {
    id: "babouches",
    name: "Handmade Leather Babouches",
    vendor: "Marrakech Craft House",
    price: 260,
    description: "Soft leather babouches made by Moroccan artisans.",
    category: "Leather",
  },
];
