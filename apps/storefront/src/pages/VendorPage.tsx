import { Link, useParams } from "react-router-dom";
import { vendors } from "../data/vendors";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

export default function VendorPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const vendor = vendors.find((item) => item.id === id);

  if (!vendor) {
    return (
      <div style={{ display: "grid", gap: 16 }}>
        <h1>Vendor not found</h1>
        <Link to="/catalog">Back to catalog</Link>
      </div>
    );
  }

  const vendorProducts = products.filter((product) => product.vendorId === vendor.id);

  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div
        style={{
          border: "1px solid #e4e4e7",
          borderRadius: 22,
          padding: 22,
          background: "#fafaf9",
          display: "grid",
          gap: 10,
        }}
      >
        <Link to="/catalog" style={{ textDecoration: "none", color: "#52525b" }}>
          ← Back to catalog
        </Link>

        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)" }}>{vendor.name}</h1>
        <div style={{ color: "#71717a", fontWeight: 700 }}>
          {vendor.city} · {vendor.specialty}
        </div>
        <p style={{ margin: 0, color: "#52525b", lineHeight: 1.8, fontSize: 18 }}>
          {vendor.description}
        </p>
      </div>

      <div style={{ display: "grid", gap: 16 }}>
        <h2 style={{ margin: 0 }}>Products by this vendor</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {vendorProducts.map((product) => (
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
