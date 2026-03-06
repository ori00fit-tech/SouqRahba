import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function CatalogPage() {
  const { addToCart } = useCart();

  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)" }}>Catalog</h1>
        <p style={{ color: "#52525b", fontSize: 18 }}>
          Browse marketplace products and add them to cart.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 18,
        }}
      >
        {products.map((product) => (
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

              <div style={{ color: "#71717a", fontWeight: 600 }}>by {product.vendor}</div>

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
                  onClick={() => addToCart(product)}
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
