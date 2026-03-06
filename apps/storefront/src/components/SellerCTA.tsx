export default function SellerCTA() {
  return (
    <section style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <button
        style={{
          minHeight: 50,
          padding: "0 20px",
          borderRadius: 14,
          border: "none",
          background: "#111827",
          color: "white",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Start Selling
      </button>

      <button
        style={{
          minHeight: 50,
          padding: "0 20px",
          borderRadius: 14,
          border: "1px solid #d4d4d8",
          background: "white",
          color: "#111827",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Explore Marketplace
      </button>
    </section>
  );
}
