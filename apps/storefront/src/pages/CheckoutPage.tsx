import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <section style={{ display: "grid", gap: 16 }}>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)" }}>
          Order placed
        </h1>
        <p style={{ margin: 0, color: "#52525b", fontSize: 18 }}>
          Your mock checkout was completed successfully.
        </p>
      </section>
    );
  }

  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)" }}>Checkout</h1>
        <p style={{ color: "#52525b", fontSize: 18 }}>
          Review your order and enter delivery details.
        </p>
      </div>

      {items.length === 0 ? (
        <p style={{ margin: 0, color: "#52525b" }}>
          Your cart is empty. Add products before checkout.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: 14,
              border: "1px solid #e4e4e7",
              borderRadius: 20,
              padding: 20,
              background: "white",
            }}
          >
            <input
              required
              placeholder="Full name"
              style={{
                minHeight: 48,
                borderRadius: 12,
                border: "1px solid #d4d4d8",
                padding: "0 14px",
                fontSize: 16,
              }}
            />

            <input
              required
              type="email"
              placeholder="Email address"
              style={{
                minHeight: 48,
                borderRadius: 12,
                border: "1px solid #d4d4d8",
                padding: "0 14px",
                fontSize: 16,
              }}
            />

            <input
              required
              placeholder="Phone number"
              style={{
                minHeight: 48,
                borderRadius: 12,
                border: "1px solid #d4d4d8",
                padding: "0 14px",
                fontSize: 16,
              }}
            />

            <input
              required
              placeholder="City"
              style={{
                minHeight: 48,
                borderRadius: 12,
                border: "1px solid #d4d4d8",
                padding: "0 14px",
                fontSize: 16,
              }}
            />

            <textarea
              required
              placeholder="Delivery address"
              rows={5}
              style={{
                borderRadius: 12,
                border: "1px solid #d4d4d8",
                padding: 14,
                fontSize: 16,
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                minHeight: 48,
                borderRadius: 12,
                border: "none",
                background: "#111827",
                color: "white",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Confirm order
            </button>
          </form>

          <div
            style={{
              display: "grid",
              gap: 14,
              border: "1px solid #e4e4e7",
              borderRadius: 20,
              padding: 20,
              background: "white",
              alignContent: "start",
            }}
          >
            <h2 style={{ margin: 0 }}>Order summary</h2>

            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  borderBottom: "1px solid #f1f5f9",
                  paddingBottom: 10,
                }}
              >
                <div>
                  <div style={{ fontWeight: 700 }}>{item.name}</div>
                  <div style={{ color: "#71717a" }}>Qty: {item.quantity}</div>
                </div>
                <strong>{item.price * item.quantity} MAD</strong>
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <strong>Total</strong>
              <strong>{total} MAD</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
