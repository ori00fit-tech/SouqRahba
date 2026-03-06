import { products } from "../data/products";

export default function FeaturedProducts() {
  return (
    <section style={{ display: "grid", gap: 18 }}>
      <div>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(28px, 5vw, 42px)",
            lineHeight: 1.1,
          }}
        >
          Featured products
        </h2>
        <p style={{ marginTop: 12, color: "#52525b", fontSize: 18 }}>
          A curated preview of what a premium Moroccan marketplace can show.
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
              Product Image
            </div>

            <div style={{ padding: 18, display: "grid", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  alignItems: "start",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 20 }}>{product.name}</h3>
                <strong style={{ whiteSpace: "nowrap" }}>{product.price}</strong>
              </div>

              <div style={{ color: "#71717a", fontWeight: 600 }}>
                by {product.vendor}
              </div>

              <p style={{ margin: 0, color: "#52525b", lineHeight: 1.6 }}>
                {product.desc}
              </p>

              <button
                style={{
                  marginTop: 6,
                  minHeight: 46,
                  borderRadius: 14,
                  border: "none",
                  background: "#111827",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                View Product
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
