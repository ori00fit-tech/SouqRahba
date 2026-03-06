import { AppShell } from "../../../packages/ui/src";

const categories = [
  { name: "Zellige", desc: "Handcrafted Moroccan tiles for homes and projects." },
  { name: "Carpets", desc: "Traditional rugs and handmade Berber carpets." },
  { name: "Pottery", desc: "Ceramics, tagines, tableware, and decor." },
  { name: "Argan", desc: "Pure argan oils and cooperative beauty products." },
  { name: "Leather", desc: "Bags, slippers, belts, and artisan goods." },
  { name: "Decor", desc: "Lanterns, mirrors, trays, and interior accents." },
];

const featuredProducts = [
  {
    name: "Premium Zellige Tile Pack",
    vendor: "Fez Atelier",
    price: "420 MAD",
    desc: "Hand-cut traditional zellige tiles for walls and premium interiors.",
  },
  {
    name: "Berber Wool Carpet",
    vendor: "Atlas Loom",
    price: "1,850 MAD",
    desc: "Authentic handwoven carpet with warm natural fibers.",
  },
  {
    name: "Pure Argan Oil 250ml",
    vendor: "Souss Cooperative",
    price: "180 MAD",
    desc: "Cold-pressed organic argan oil from local producers.",
  },
  {
    name: "Handmade Leather Babouches",
    vendor: "Marrakech Craft House",
    price: "260 MAD",
    desc: "Soft leather babouches made by Moroccan artisans.",
  },
];

const benefits = [
  "Verified artisans and local producers",
  "Direct-from-source Moroccan products",
  "Transparent pricing and seller trust",
  "Built for scalable local and export commerce",
];

export default function App() {
  return (
    <AppShell title="Souq MaZellige">
      <div style={{ display: "grid", gap: 56 }}>
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
            {featuredProducts.map((product) => (
              <article
                key={product.name}
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
                    background:
                      "linear-gradient(135deg, #e5e7eb 0%, #f8fafc 100%)",
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

        <section
          style={{
            border: "1px solid #e4e4e7",
            borderRadius: 26,
            padding: 28,
            background: "#fafaf9",
            display: "grid",
            gap: 18,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 5vw, 42px)",
              lineHeight: 1.1,
            }}
          >
            Built for artisans, cooperatives, and serious commerce
          </h2>

          <p
            style={{
              margin: 0,
              maxWidth: 760,
              fontSize: 18,
              color: "#52525b",
              lineHeight: 1.7,
            }}
          >
            This platform is designed to grow from a premium storefront into a
            full marketplace with catalog management, seller onboarding, secure
            checkout, order flows, and export-ready operations.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
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
          </div>
        </section>
      </div>
    </AppShell>
  );
}	
	

