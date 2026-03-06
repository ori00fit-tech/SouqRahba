import { z } from "zod";
export const ProductStatus = z.enum(["draft", "pending", "published", "rejected", "archived"]);
export const ProductSchema = z.object({
  id: z.string(), sellerId: z.string(), slug: z.string(), title: z.string().min(2), description: z.string().min(10),
  status: ProductStatus, price: z.number().nonnegative(), currency: z.string().length(3).default("MAD")
});
export const SellerSchema = z.object({
  id: z.string(), displayName: z.string(), status: z.enum(["draft", "submitted", "under_review", "needs_changes", "approved", "suspended", "rejected"])
});
export type Product = z.infer<typeof ProductSchema>;
export type Seller = z.infer<typeof SellerSchema>;
