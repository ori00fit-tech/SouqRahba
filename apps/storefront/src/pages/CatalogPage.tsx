import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useToast } from "../context/ToastContext";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function CatalogPage() {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { showToast } = useToast();

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.vendor.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)" }}>Catalog</h1>
        <p style={{ color: "#52525b", fontSize: 18 }}>
          Browse marketplace products, search faster, and save favorites.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, vendors, categories..."
          style={{
            minHeight: 50,
            borderRadius: 14,
            border: "1px solid #d4d4d8",
            padding: "0 14px",
            fontSize: 16,
            outline: "none",
          }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            minHeight: 50,
            borderRadius: 14,
            border: "1px solid #d4d4d8",
            padding: "0 14px",
            fontSize: 16,
            background: "white",
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div style={{ color: "#71717a", fontWeight: 600 }}>
        {filteredProducts.length} product(s) found
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 18,
        }}
      >
        {filteredProducts.map((product) => {
          const favorite = isFavorite(product.id);

          return (
            <article
              key={product.id}
              style={{
                border: "1px solid #e4e4e7",
                borderRadius: 22,
                overflow: "hidden",
                background: "white",
              }}
            >
              <div
                style={{
                  height: 180,
                  background: "linear-gradient(135deg, #e5e7eb 0%, #f8fafc 100%)",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 800,
                  fontSize: 20,
                  color: "#374151",
                }}
              >
                {product.category}
              </div>

              <div style={{ padding: 18, display: "grid", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <h3 style={{ margin: 0, fontSize: 20 }}>{product.name}</h3>
                  <strong>{product.price} MAD</strong>
                </div>

                <Link
                  to={`/vendor/${product.vendorId}`}
                  style={{
                    color: "#71717a",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  by {product.vendor}
                </Link>

                <p style={{ margin: 0, color: "#52525b", lineHeight: 1.6 }}>
                  {product.description}
                </p>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{
                      minHeight: 44,
                      padding: "10px 16px",
                      borderRadius: 12,
                      background: "#fff",
                      border: "1px solid #d4d4d8",
                      color: "#111827",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    View
                  </Link>

                  <button
                    onClick={() => {
                      addToCart(product);
                      showToast("Product added to cart");
                    }}
                    style={{
                      minHeight: 44,
                      padding: "10px 16px",
                      borderRadius: 12,
                      border: "none",
                      background: "#111827",
                      color: "white",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Add to cart
                  </button>

                  <button
                    onClick={() => {
                      toggleFavorite(product.id);
                      showToast(favorite ? "Removed from favorites" : "Saved to favorites");
                    }}
                    style={{
                      minHeight: 44,
                      padding: "10px 16px",
                      borderRadius: 12,
                      border: "1px solid #d4d4d8",
                      background: favorite ? "#111827" : "white",
                      color: favorite ? "white" : "#111827",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    {favorite ? "Saved" : "Favorite"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
