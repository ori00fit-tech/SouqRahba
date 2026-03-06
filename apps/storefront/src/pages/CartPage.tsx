import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, clearCart, total } = useCart();

  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)" }}>Your Cart</h1>
        <p style={{ color: "#52525b", fontSize: 18 }}>
          Review selected products before checkout.
        </p>
      </div>

      {items.length === 0 ? (
        <div style={{ display: "grid", gap: 12 }}>
          <p style={{ margin: 0 }}>Your cart is empty.</p>
          <Link to="/catalog">Go to catalog</Link>
        </div>
      ) : (
        <>
          <div style={{ display: "grid", gap: 16 }}>
            {items.map((item) => (
              <article
                key={item.id}
                style={{
                  border: "1px solid #e4e4e7",
                  borderRadius: 18,
                  padding: 18,
                  display: "grid",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <strong>{item.price} MAD</strong>
                </div>

                <div style={{ color: "#71717a" }}>Quantity: {item.quantity}</div>
                <div style={{ color: "#71717a" }}>Vendor: {item.vendor}</div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    width: "fit-content",
                    minHeight: 40,
                    padding: "0 14px",
                    borderRadius: 10,
                    border: "1px solid #d4d4d8",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </article>
            ))}
          </div>

          <div
            style={{
              border: "1px solid #e4e4e7",
              borderRadius: 18,
              padding: 18,
              display: "grid",
              gap: 14,
            }}
          >
            <strong style={{ fontSize: 24 }}>Total: {total} MAD</strong>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                style={{
                  minHeight: 46,
                  padding: "0 18px",
                  borderRadius: 12,
                  border: "none",
                  background: "#111827",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Checkout
              </button>

              <button
                onClick={clearCart}
                style={{
                  minHeight: 46,
                  padding: "0 18px",
                  borderRadius: 12,
                  border: "1px solid #d4d4d8",
                  background: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Clear cart
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
