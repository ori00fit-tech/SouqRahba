export default function HeroSection() {
  const benefits = [
    "Verified artisans and local producers",
    "Direct-from-source Moroccan products",
    "Transparent pricing and seller trust",
    "Built for scalable local and export commerce",
  ];

  return (
    <section
      style={{
        padding: "24px 0 8px",
        display: "grid",
        gap: 24,
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: "fit-content",
          padding: "8px 14px",
          borderRadius: 999,
          border: "1px solid #d4d4d8",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Moroccan artisan commerce, modernized
      </div>

      <div style={{ display: "grid", gap: 18, maxWidth: 760 }}>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(40px, 7vw, 76px)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Buy authentic Moroccan products from trusted artisans
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: 20,
            lineHeight: 1.6,
            color: "#3f3f46",
            maxWidth: 700,
          }}
        >
          Souq MaZellige connects local craft, heritage, and commerce in one
          premium marketplace experience for Morocco and beyond.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
        }}
      >
        <input
          placeholder="Search zellige, carpets, argan oil..."
          style={{
            flex: "1 1 320px",
            minHeight: 52,
            borderRadius: 14,
            border: "1px solid #d4d4d8",
            padding: "0 16px",
            fontSize: 16,
            outline: "none",
          }}
        />
        <button
          style={{
            minHeight: 52,
            padding: "0 22px",
            borderRadius: 14,
            border: "none",
            background: "#111827",
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Search
        </button>
        <button
          style={{
            minHeight: 52,
            padding: "0 22px",
            borderRadius: 14,
            border: "1px solid #d4d4d8",
            background: "white",
            color: "#111827",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Become a Seller
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 14,
          marginTop: 10,
        }}
      >
        {benefits.map((item) => (
          <div
            key={item}
            style={{
              border: "1px solid #e4e4e7",
              borderRadius: 18,
              padding: 16,
              background: "#fafafa",
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
