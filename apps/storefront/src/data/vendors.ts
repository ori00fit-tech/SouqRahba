export type Vendor = {
  id: string;
  name: string;
  city: string;
  specialty: string;
  description: string;
};

export const vendors: Vendor[] = [
  {
    id: "fez-atelier",
    name: "Fez Atelier",
    city: "Fes",
    specialty: "Zellige",
    description: "Traditional tile craftsmanship for refined Moroccan interiors.",
  },
  {
    id: "atlas-loom",
    name: "Atlas Loom",
    city: "Azilal",
    specialty: "Carpets",
    description: "Handwoven rugs and premium wool carpets from artisan makers.",
  },
  {
    id: "souss-cooperative",
    name: "Souss Cooperative",
    city: "Agadir",
    specialty: "Argan",
    description: "Organic argan-based products sourced from local cooperatives.",
  },
  {
    id: "marrakech-craft-house",
    name: "Marrakech Craft House",
    city: "Marrakech",
    specialty: "Leather",
    description: "Leather goods handcrafted by experienced Moroccan artisans.",
  },
];
