import { AppShell } from "../../../packages/ui/src";
import HeroSection from "./components/HeroSection";
import CategoryGrid from "./components/CategoryGrid";
import FeaturedProducts from "./components/FeaturedProducts";
import TrustSection from "./components/TrustSection";
import SellerCTA from "./components/SellerCTA";

export default function App() {
  return (
    <AppShell title="Souq MaZellige">
      <div style={{ display: "grid", gap: 56 }}>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <TrustSection />
        <SellerCTA />
      </div>
    </AppShell>
  );
}
