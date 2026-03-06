import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div style={{ display: "grid", gap: 16 }}>
        <h1>Product not found</h1>
        <Link to="/catalog">Back to catalog</Link>
      </div>
    );
  }

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 24,
        alignItems: "start",
      }}
    >
      <div
        style={{
          minHeight: 320,
          borderRadius: 24,
          background: "linear-gradient(135deg, #e5e7eb 0%, #f8fafc 100%)",
          display: "grid",
          placeItems: "center",
          fontWeight: 800,
          fontSize: 28,
          color: "#374151",
        }}
      >
        {product.category}
      </div>

      <div style={{ display: "grid", gap: 16 }}>
        <Link to="/catalog" style={{ textDecoration: "none", color: "#52525b" }}>
          ← Back to catalog
        </Link>

        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 54px)", lineHeight: 1.05 }}>
          {product.name}
        </h1>

        <div style={{ color: "#71717a", fontWeight: 700 }}>by {product.vendor}</div>

        <strong style={{ fontSize: 28 }}>{product.price} MAD</strong>

        <p style={{ margin: 0, color: "#52525b", lineHeight: 1.8, fontSize: 18 }}>
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          style={{
            width: "fit-content",
            minHeight: 48,
            padding: "0 18px",
            borderRadius: 14,
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
    </section>
  );
}
