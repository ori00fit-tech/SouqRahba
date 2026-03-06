export default function TrustSection() {
  return (
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
        This platform is designed to grow from a premium storefront into a full
        marketplace with catalog management, seller onboarding, secure checkout,
        order flows, and export-ready operations.
      </p>
    </section>
  );
}
