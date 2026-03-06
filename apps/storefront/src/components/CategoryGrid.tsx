import { categories } from "../data/categories";

export default function CategoryGrid() {
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
          Explore categories
        </h2>
        <p style={{ marginTop: 12, color: "#52525b", fontSize: 18 }}>
          Structured for discovery, trust, and scalable catalog growth.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 18,
        }}
      >
        {categories.map((category) => (
          <article
            key={category.name}
            style={{
              border: "1px solid #e4e4e7",
              borderRadius: 20,
              padding: 20,
              background: "white",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: 10, fontSize: 22 }}>
              {category.name}
            </h3>
            <p style={{ margin: 0, color: "#52525b", lineHeight: 1.6 }}>
              {category.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
