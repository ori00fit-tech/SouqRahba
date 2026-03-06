import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        padding: "0 0 24px",
        flexWrap: "wrap",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#111827",
          fontWeight: 800,
          fontSize: 24,
        }}
      >
        Souq MaZellige
      </Link>

      <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#111827", fontWeight: 600 }}>
          Home
        </Link>
        <Link to="/catalog" style={{ textDecoration: "none", color: "#111827", fontWeight: 600 }}>
          Catalog
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "#111827", fontWeight: 700 }}>
          Cart ({itemCount})
        </Link>
      </div>
    </nav>
  );
}
